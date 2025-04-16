import {
  Array as ReadonlyArray,
  Effect,
  Option,
  Schema,
  Cause,
  Predicate,
} from 'effect'
import { RepoInfo } from './repos.js'
import path from 'node:path'
import * as fs from 'node:fs'
import { LandscapeSchema } from '@localfirstfm/landscape-schema'
const dirname = import.meta.dirname

const FileResponseSuccessSchema = Schema.Struct({
  name: Schema.String,
  path: Schema.String,
  sha: Schema.String,
  size: Schema.Number,
  url: Schema.String,
  html_url: Schema.String,
  git_url: Schema.String,
  download_url: Schema.String,
  type: Schema.String,
  content: Schema.Uint8ArrayFromBase64,
  encoding: Schema.String,
  _links: Schema.Struct({
    self: Schema.String,
    git: Schema.String,
    html: Schema.String,
  }),
})

const FileResponseErrorSchema = Schema.Struct({
  message: Schema.String,
  documentation_url: Schema.String,
  status: Schema.String,
})

const FileResponseSchema = Schema.Union(
  FileResponseSuccessSchema,
  FileResponseErrorSchema,
)

const CommitInfoSchema = Schema.Struct({
  commit: Schema.Struct({
    committer: Schema.Struct({
      date: Schema.DateFromString,
    }),
  }),
})

const CommitsResponseSchema = Schema.Array(CommitInfoSchema)

export const fetchRepo = Effect.fn('fetchRepo')(function* (repoInfo: RepoInfo) {
  yield* Effect.annotateCurrentSpan({ repoInfo })

  const { owner, repo, basePath } = repoInfo
  const filesToFetch = [
    'data.js',
    'details.md',
    'logo.light.svg',
    'logo.dark.svg',
    'logo.light.png',
    'logo.dark.png',
  ]

  const results = yield* Effect.forEach(filesToFetch, (file) =>
    Effect.gen(function* () {
      // Special case for "local content" to short-circuit via local FS
      if (
        owner === 'localfirstfm' &&
        repo === 'local-first-landscape' &&
        basePath.startsWith('temporary-technology-info')
      ) {
        const filePath = path.join(dirname, '..', '..', basePath, file)
        const exists = fs.existsSync(filePath)
        if (exists) {
          const content = new Uint8Array(fs.readFileSync(filePath))
          const lastUpdated = fs.statSync(filePath).mtime
          return { name: file, content, lastUpdated }
        }
      }

      const pathPrefix = basePath ? `${basePath}/` : ''
      const contentUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${pathPrefix}${file}`
      const contentResponse = yield* Effect.tryPromise(() =>
        fetch(contentUrl, {
          headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
        }).then((response) => response.json()),
      )

      const decodedContent = yield* Schema.decodeUnknown(
        FileResponseSuccessSchema,
      )(contentResponse)

      const commitsUrl = `https://api.github.com/repos/${owner}/${repo}/commits?path=${pathPrefix}${file}&page=1&per_page=1`
      const commitsResponse = yield* Effect.tryPromise(() =>
        fetch(commitsUrl, {
          headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
        }).then((response) => response.json()),
      )

      const decodedCommit = yield* Schema.decodeUnknown(
        CommitsResponseSchema.pipe(Schema.headOrElse()),
      )(commitsResponse)

      return {
        name: file,
        content: decodedContent.content,
        lastUpdated: decodedCommit.commit.committer.date,
      }
    }).pipe(
      // Effect.tapErrorCause(Effect.logError),
      Effect.option,
    ),
  ).pipe(Effect.map((_) => ReadonlyArray.filterMap(_, (_) => _)))

  const dataJs = results.find((_) => _.name === 'data.js')
  const details = results.find((_) => _.name === 'details.md')
  const logoLight = results.find((_) => _.name.includes('logo.light'))
  const logoDark = results.find((_) => _.name.includes('logo.dark'))

  if (!dataJs || !logoLight || !logoDark || !details) {
    return yield* new FetchRepoErrorMissingFiles({
      repoInfo,
      missingFiles: [
        dataJs ? [] : ['data.js'],
        details ? [] : ['details.md'],
        logoLight ? [] : ['logo.light.*'],
        logoDark ? [] : ['logo.dark.*'],
      ].flat(),
    })
  }

  const dataJson = yield* getDataJson(
    stringFromUint8Array(dataJs.content),
    dataJs.lastUpdated,
    repoInfo,
  )

  return {
    files: {
      dataJson: {
        name: 'data.json',
        content: dataJson,
        lastUpdated: dataJs.lastUpdated,
      },
      details,
      logoLight,
      logoDark,
    },
    repoInfo,
  }
})

const getDataJson = (code: string, lastUpdated: Date, repoInfo: RepoInfo) =>
  Effect.gen(function* () {
    const module = yield* Effect.tryPromise({
      try: async () => {
        const blob = new Blob([code], { type: 'text/javascript' })
        const url = URL.createObjectURL(blob)
        const module = await import(url)
        URL.revokeObjectURL(url)
        return module
      },
      catch: (cause) => new FetchRepoErrorBadCode({ cause, repoInfo, code }),
    })

    if (Predicate.hasProperty(module, 'data') === false) {
      return yield* new FetchRepoErrorBadCode({
        cause: new Error(
          'data.js must export a "data" object that matches the Landscape schema',
        ),
        repoInfo,
        code,
      })
    }

    const data = yield* Schema.validate(LandscapeSchema)(module.data)

    const dataJson = yield* Schema.encodeUnknown(
      Schema.parseJson(LandscapeSchema, { space: 2 }),
    )({ ...data, __generated: { lastUpdated } })

    return dataJson
  })

export class FetchRepoErrorBadCode extends Schema.TaggedError<FetchRepoErrorBadCode>()(
  'FetchRepoErrorBadCode',
  {
    cause: Schema.Defect,
    repoInfo: RepoInfo,
    code: Schema.String,
  },
) {}

export class FetchRepoErrorMissingFiles extends Schema.TaggedError<FetchRepoErrorMissingFiles>()(
  'FetchRepoErrorMissingFiles',
  {
    repoInfo: RepoInfo,
    missingFiles: Schema.Array(Schema.String),
  },
) {}

export class FetchRepoError extends Schema.Union(
  FetchRepoErrorBadCode,
  FetchRepoErrorMissingFiles,
) {}

const stringFromUint8Array = (uint8Array: Uint8Array) =>
  new TextDecoder().decode(uint8Array)

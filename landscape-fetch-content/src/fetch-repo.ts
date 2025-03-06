import { Array as ReadonlyArray, Effect, Option, Schema, Cause } from 'effect'
import { RepoInfo } from './repos.js'
import path from 'node:path'
import * as fs from 'node:fs'
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
          return { name: file, content }
        }
      }

      const pathPrefix = basePath ? `${basePath}/` : ''
      const url = `https://api.github.com/repos/${owner}/${repo}/contents/${pathPrefix}${file}`
      const response = yield* Effect.tryPromise(() =>
        fetch(url, {
          headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
        }).then((response) => response.json()),
      )

      const decoded = yield* Schema.decodeUnknown(FileResponseSuccessSchema)(
        response,
      )

      return {
        name: file,
        content: decoded.content,
      }
    }).pipe(
      // Effect.tapErrorCause(Effect.logError),
      Effect.option,
    ),
  ).pipe(Effect.map((_) => ReadonlyArray.filterMap(_, (_) => _)))

  const data = results.find((_) => _.name === 'data.js')
  const details = results.find((_) => _.name === 'details.md')
  const logoLight = results.find((_) => _.name.includes('logo.light'))
  const logoDark = results.find((_) => _.name.includes('logo.dark'))

  if (!data || !logoLight || !logoDark || !details) {
    return yield* new FetchRepoErrorMissingFiles({
      repoInfo,
      missingFiles: [
        data ? [] : ['data.js'],
        details ? [] : ['details.md'],
        logoLight ? [] : ['logo.light.*'],
        logoDark ? [] : ['logo.dark.*'],
      ].flat(),
    })
  }

  yield* validateCode(stringFromUint8Array(data.content), repoInfo)

  return { files: { data, details, logoLight, logoDark }, repoInfo }
})

const validateCode = (code: string, repoInfo: RepoInfo) =>
  Effect.tryPromise({
    try: () => {
      const blob = new Blob([code], { type: 'text/javascript' })
      const url = URL.createObjectURL(blob)
      return import(url).finally(() => URL.revokeObjectURL(url))
    },
    catch: (cause) => new FetchRepoErrorBadCode({ cause, repoInfo, code }),
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

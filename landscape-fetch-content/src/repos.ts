import { Schema } from 'effect'

export const RepoInfo = Schema.Struct({
  id: Schema.String,
  owner: Schema.String,
  repo: Schema.String,
  /** @default 'main' */
  branch: Schema.optionalWith(Schema.String, { default: () => 'main' }),
  /** @default '' */
  basePath: Schema.optionalWith(Schema.String, { default: () => '' }),
})

export type RepoInfo = typeof RepoInfo.Type

export const repos = Schema.decodeSync(Schema.Array(RepoInfo))([
  {
    id: 'automerge',
    owner: 'localfirstfm',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/automerge',
  },
  {
    id: 'electricsql',
    owner: 'localfirstfm',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/electricsql',
  },
  {
    id: 'jazz',
    owner: 'garden-co',
    repo: 'jazz-lofi-landscape',
  },
  {
    id: 'zero',
    owner: 'localfirstfm',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/zero',
  },
  {
    id: 'liveblocks-yjs',
    owner: 'localfirstfm',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/liveblocks-yjs',
  },
  {
    id: 'liveblocks-storage',
    owner: 'localfirstfm',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/liveblocks-storage',
  },
  {
    id: 'livestore',
    owner: 'livestorejs',
    repo: 'local-first-landscape',
  },
  {
    id: 'dxos',
    owner: 'localfirstfm',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/dxos',
  },
  {
    id: 'basicdb',
    owner: 'localfirstfm',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/basicdb',
  },
  {
    id: 'convex',
    owner: 'get-convex',
    repo: 'localfirst-landscape-data',
    basePath: '',
  },
  {
    id: 'ditto',
    owner: 'localfirstfm',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/ditto',
  },
  {
    id: 'powersync',
    owner: 'localfirstfm',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/powersync',
  },
  {
    id: 'triplit',
    owner: 'localfirstfm',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/triplit',
  },
  {
    id: 'y-sweet',
    owner: 'localfirstfm',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/y-sweet',
  },
])

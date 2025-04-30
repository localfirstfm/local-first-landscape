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
    id: 'nextgraph',
    owner: 'nextgraph-org',
    repo: 'landscape-data',
    basePath: '',
  },
  {
    id: 'yjs',
    owner: 'yjs',
    repo: 'local-first-landscape-data',
    basePath: 'yjs',
  },
  {
    id: 'automerge',
    owner: 'automerge',
    repo: 'local-first-landscape-data',
    basePath: '',
  },
  {
    id: 'electricsql',
    owner: 'electric-sql',
    repo: 'local-first-landscape-data',
    basePath: '',
  },
  {
    id: 'jazz',
    owner: 'garden-co',
    repo: 'jazz-lofi-landscape',
  },
  {
    id: 'zero',
    owner: 'rocicorp',
    repo: 'local-first-landscape-data',
    basePath: '',
  },
  {
    id: 'liveblocks-yjs',
    owner: 'liveblocks',
    repo: 'local-first-landscape-data',
    basePath: 'liveblocks-yjs',
  },
  {
    id: 'liveblocks-storage',
    owner: 'liveblocks',
    repo: 'local-first-landscape-data',
    basePath: 'liveblocks-storage',
  },
  {
    id: 'livestore',
    owner: 'livestorejs',
    repo: 'local-first-landscape',
  },
  {
    id: 'dxos',
    owner: 'dxos',
    repo: 'local-first-landscape-data',
    basePath: '',
  },
  {
    id: 'basic',
    owner: 'basicdb',
    repo: 'local-first-landscape-data',
    basePath: '',
  },
  {
    id: 'convex',
    owner: 'get-convex',
    repo: 'localfirst-landscape-data',
    basePath: '',
  },
  {
    id: 'ditto',
    owner: 'ditto',
    repo: 'local-first-landscape-data',
    basePath: 'getditto',
  },
  {
    id: 'powersync',
    owner: 'powersync-ja',
    repo: 'local-first-landscape-data',
    basePath: '',
  },
  {
    id: 'triplit',
    owner: 'aspen-cloud',
    repo: 'local-first-landscape-data',
    basePath: '',
  },
  {
    id: 'tinybase',
    owner: 'tinyplex',
    repo: 'tinybase-landscape-data',
    basePath: '',
  },
  {
    id: 'y-sweet',
    owner: 'jamsocket',
    repo: 'y-sweet',
    basePath: 'local-first-landscape',
  },
  {
    id: 'loro',
    owner: 'loro-dev',
    repo: 'loro-landscape-data',
    basePath: '',
  },
])

import { LandscapeSchema } from '@localfirstfm/landscape-schema'
import { Schema } from 'effect'

import automergeJson from './automerge/data.json' with { type: 'json' }
import electricsqlJson from './electricsql/data.json' with { type: 'json' }
import jazzJson from './jazz/data.json' with { type: 'json' }
import zeroJson from './zero/data.json' with { type: 'json' }
import liveblocks_yjsJson from './liveblocks-yjs/data.json' with { type: 'json' }
import liveblocks_storageJson from './liveblocks-storage/data.json' with { type: 'json' }
import livestoreJson from './livestore/data.json' with { type: 'json' }
import dxosJson from './dxos/data.json' with { type: 'json' }
import basicdbJson from './basicdb/data.json' with { type: 'json' }
import convexJson from './convex/data.json' with { type: 'json' }
import dittoJson from './ditto/data.json' with { type: 'json' }
import powersyncJson from './powersync/data.json' with { type: 'json' }
import triplitJson from './triplit/data.json' with { type: 'json' }
import y_sweetJson from './y-sweet/data.json' with { type: 'json' }

import automergeLogoLight from './automerge/logo.light.png'
import automergeLogoDark from './automerge/logo.dark.png'
import electricsqlLogoLight from './electricsql/logo.light.png'
import electricsqlLogoDark from './electricsql/logo.dark.png'
import jazzLogoLight from './jazz/logo.light.png'
import jazzLogoDark from './jazz/logo.dark.png'
import zeroLogoLight from './zero/logo.light.svg'
import zeroLogoDark from './zero/logo.dark.svg'
import liveblocks_yjsLogoLight from './liveblocks-yjs/logo.light.png'
import liveblocks_yjsLogoDark from './liveblocks-yjs/logo.dark.png'
import liveblocks_storageLogoLight from './liveblocks-storage/logo.light.png'
import liveblocks_storageLogoDark from './liveblocks-storage/logo.dark.png'
import livestoreLogoLight from './livestore/logo.light.svg'
import livestoreLogoDark from './livestore/logo.dark.svg'
import dxosLogoLight from './dxos/logo.light.png'
import dxosLogoDark from './dxos/logo.dark.png'
import basicdbLogoLight from './basicdb/logo.light.svg'
import basicdbLogoDark from './basicdb/logo.dark.svg'
import convexLogoLight from './convex/logo.light.svg'
import convexLogoDark from './convex/logo.dark.svg'
import dittoLogoLight from './ditto/logo.light.png'
import dittoLogoDark from './ditto/logo.dark.png'
import powersyncLogoLight from './powersync/logo.light.png'
import powersyncLogoDark from './powersync/logo.dark.png'
import triplitLogoLight from './triplit/logo.light.png'
import triplitLogoDark from './triplit/logo.dark.png'
import y_sweetLogoLight from './y-sweet/logo.light.png'
import y_sweetLogoDark from './y-sweet/logo.dark.png'

const automerge = Schema.decodeUnknownSync(LandscapeSchema)(automergeJson)
const electricsql = Schema.decodeUnknownSync(LandscapeSchema)(electricsqlJson)
const jazz = Schema.decodeUnknownSync(LandscapeSchema)(jazzJson)
const zero = Schema.decodeUnknownSync(LandscapeSchema)(zeroJson)
const liveblocks_yjs = Schema.decodeUnknownSync(LandscapeSchema)(liveblocks_yjsJson)
const liveblocks_storage = Schema.decodeUnknownSync(LandscapeSchema)(liveblocks_storageJson)
const livestore = Schema.decodeUnknownSync(LandscapeSchema)(livestoreJson)
const dxos = Schema.decodeUnknownSync(LandscapeSchema)(dxosJson)
const basicdb = Schema.decodeUnknownSync(LandscapeSchema)(basicdbJson)
const convex = Schema.decodeUnknownSync(LandscapeSchema)(convexJson)
const ditto = Schema.decodeUnknownSync(LandscapeSchema)(dittoJson)
const powersync = Schema.decodeUnknownSync(LandscapeSchema)(powersyncJson)
const triplit = Schema.decodeUnknownSync(LandscapeSchema)(triplitJson)
const y_sweet = Schema.decodeUnknownSync(LandscapeSchema)(y_sweetJson)

export const data = [
  { ...automerge, Logo: { Light: automergeLogoLight, Dark: automergeLogoDark } },
  { ...electricsql, Logo: { Light: electricsqlLogoLight, Dark: electricsqlLogoDark } },
  { ...jazz, Logo: { Light: jazzLogoLight, Dark: jazzLogoDark } },
  { ...zero, Logo: { Light: zeroLogoLight, Dark: zeroLogoDark } },
  { ...liveblocks_yjs, Logo: { Light: liveblocks_yjsLogoLight, Dark: liveblocks_yjsLogoDark } },
  { ...liveblocks_storage, Logo: { Light: liveblocks_storageLogoLight, Dark: liveblocks_storageLogoDark } },
  { ...livestore, Logo: { Light: livestoreLogoLight, Dark: livestoreLogoDark } },
  { ...dxos, Logo: { Light: dxosLogoLight, Dark: dxosLogoDark } },
  { ...basicdb, Logo: { Light: basicdbLogoLight, Dark: basicdbLogoDark } },
  { ...convex, Logo: { Light: convexLogoLight, Dark: convexLogoDark } },
  { ...ditto, Logo: { Light: dittoLogoLight, Dark: dittoLogoDark } },
  { ...powersync, Logo: { Light: powersyncLogoLight, Dark: powersyncLogoDark } },
  { ...triplit, Logo: { Light: triplitLogoLight, Dark: triplitLogoDark } },
  { ...y_sweet, Logo: { Light: y_sweetLogoLight, Dark: y_sweetLogoDark } }
]

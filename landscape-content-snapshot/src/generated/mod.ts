import { LandscapeSchema } from '@localfirstfm/landscape-schema'
import { Schema } from 'effect'

import nextgraphJson from './nextgraph/data.json' with { type: 'json' }
import yjsJson from './yjs/data.json' with { type: 'json' }
import automergeJson from './automerge/data.json' with { type: 'json' }
import electricsqlJson from './electricsql/data.json' with { type: 'json' }
import jazzJson from './jazz/data.json' with { type: 'json' }
import zeroJson from './zero/data.json' with { type: 'json' }
import liveblocks_yjsJson from './liveblocks-yjs/data.json' with { type: 'json' }
import liveblocks_storageJson from './liveblocks-storage/data.json' with { type: 'json' }
import livestoreJson from './livestore/data.json' with { type: 'json' }
import dxosJson from './dxos/data.json' with { type: 'json' }
import basicJson from './basic/data.json' with { type: 'json' }
import convexJson from './convex/data.json' with { type: 'json' }
import powersyncJson from './powersync/data.json' with { type: 'json' }
import triplitJson from './triplit/data.json' with { type: 'json' }
import tinybaseJson from './tinybase/data.json' with { type: 'json' }
import y_sweetJson from './y-sweet/data.json' with { type: 'json' }
import loroJson from './loro/data.json' with { type: 'json' }
import instantJson from './instant/data.json' with { type: 'json' }

import nextgraphLogoLight from './nextgraph/logo.light.svg'
import nextgraphLogoDark from './nextgraph/logo.dark.svg'
import yjsLogoLight from './yjs/logo.light.svg'
import yjsLogoDark from './yjs/logo.dark.svg'
import automergeLogoLight from './automerge/logo.light.png'
import automergeLogoDark from './automerge/logo.dark.png'
import electricsqlLogoLight from './electricsql/logo.light.svg'
import electricsqlLogoDark from './electricsql/logo.dark.svg'
import jazzLogoLight from './jazz/logo.light.svg'
import jazzLogoDark from './jazz/logo.dark.svg'
import zeroLogoLight from './zero/logo.light.svg'
import zeroLogoDark from './zero/logo.dark.svg'
import liveblocks_yjsLogoLight from './liveblocks-yjs/logo.light.png'
import liveblocks_yjsLogoDark from './liveblocks-yjs/logo.dark.png'
import liveblocks_storageLogoLight from './liveblocks-storage/logo.light.png'
import liveblocks_storageLogoDark from './liveblocks-storage/logo.dark.png'
import livestoreLogoLight from './livestore/logo.light.svg'
import livestoreLogoDark from './livestore/logo.dark.svg'
import dxosLogoLight from './dxos/logo.light.svg'
import dxosLogoDark from './dxos/logo.dark.svg'
import basicLogoLight from './basic/logo.light.svg'
import basicLogoDark from './basic/logo.dark.svg'
import convexLogoLight from './convex/logo.light.svg'
import convexLogoDark from './convex/logo.dark.svg'
import powersyncLogoLight from './powersync/logo.light.svg'
import powersyncLogoDark from './powersync/logo.dark.svg'
import triplitLogoLight from './triplit/logo.light.svg'
import triplitLogoDark from './triplit/logo.dark.svg'
import tinybaseLogoLight from './tinybase/logo.light.svg'
import tinybaseLogoDark from './tinybase/logo.dark.svg'
import y_sweetLogoLight from './y-sweet/logo.light.png'
import y_sweetLogoDark from './y-sweet/logo.dark.png'
import loroLogoLight from './loro/logo.light.svg'
import loroLogoDark from './loro/logo.dark.svg'
import instantLogoLight from './instant/logo.light.svg'
import instantLogoDark from './instant/logo.dark.svg'

const nextgraph = Schema.decodeUnknownSync(LandscapeSchema)(nextgraphJson)
const yjs = Schema.decodeUnknownSync(LandscapeSchema)(yjsJson)
const automerge = Schema.decodeUnknownSync(LandscapeSchema)(automergeJson)
const electricsql = Schema.decodeUnknownSync(LandscapeSchema)(electricsqlJson)
const jazz = Schema.decodeUnknownSync(LandscapeSchema)(jazzJson)
const zero = Schema.decodeUnknownSync(LandscapeSchema)(zeroJson)
const liveblocks_yjs = Schema.decodeUnknownSync(LandscapeSchema)(liveblocks_yjsJson)
const liveblocks_storage = Schema.decodeUnknownSync(LandscapeSchema)(liveblocks_storageJson)
const livestore = Schema.decodeUnknownSync(LandscapeSchema)(livestoreJson)
const dxos = Schema.decodeUnknownSync(LandscapeSchema)(dxosJson)
const basic = Schema.decodeUnknownSync(LandscapeSchema)(basicJson)
const convex = Schema.decodeUnknownSync(LandscapeSchema)(convexJson)
const powersync = Schema.decodeUnknownSync(LandscapeSchema)(powersyncJson)
const triplit = Schema.decodeUnknownSync(LandscapeSchema)(triplitJson)
const tinybase = Schema.decodeUnknownSync(LandscapeSchema)(tinybaseJson)
const y_sweet = Schema.decodeUnknownSync(LandscapeSchema)(y_sweetJson)
const loro = Schema.decodeUnknownSync(LandscapeSchema)(loroJson)
const instant = Schema.decodeUnknownSync(LandscapeSchema)(instantJson)

export const data = [
  { ...nextgraph, Logo: { Light: nextgraphLogoLight, Dark: nextgraphLogoDark } },
  { ...yjs, Logo: { Light: yjsLogoLight, Dark: yjsLogoDark } },
  { ...automerge, Logo: { Light: automergeLogoLight, Dark: automergeLogoDark } },
  { ...electricsql, Logo: { Light: electricsqlLogoLight, Dark: electricsqlLogoDark } },
  { ...jazz, Logo: { Light: jazzLogoLight, Dark: jazzLogoDark } },
  { ...zero, Logo: { Light: zeroLogoLight, Dark: zeroLogoDark } },
  { ...liveblocks_yjs, Logo: { Light: liveblocks_yjsLogoLight, Dark: liveblocks_yjsLogoDark } },
  { ...liveblocks_storage, Logo: { Light: liveblocks_storageLogoLight, Dark: liveblocks_storageLogoDark } },
  { ...livestore, Logo: { Light: livestoreLogoLight, Dark: livestoreLogoDark } },
  { ...dxos, Logo: { Light: dxosLogoLight, Dark: dxosLogoDark } },
  { ...basic, Logo: { Light: basicLogoLight, Dark: basicLogoDark } },
  { ...convex, Logo: { Light: convexLogoLight, Dark: convexLogoDark } },
  { ...powersync, Logo: { Light: powersyncLogoLight, Dark: powersyncLogoDark } },
  { ...triplit, Logo: { Light: triplitLogoLight, Dark: triplitLogoDark } },
  { ...tinybase, Logo: { Light: tinybaseLogoLight, Dark: tinybaseLogoDark } },
  { ...y_sweet, Logo: { Light: y_sweetLogoLight, Dark: y_sweetLogoDark } },
  { ...loro, Logo: { Light: loroLogoLight, Dark: loroLogoDark } },
  { ...instant, Logo: { Light: instantLogoLight, Dark: instantLogoDark } }
]

// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: '0.0.1',
  Id: 'dxos',
  Name: 'DXOS',
  Website: {
    data: 'https://dxos.org'
  },
  License: {
    data: 'MIT'
  },
  Deployment: {
    data: ['Self-hosted']
  },
  AppTarget: {
    data: {
      Platform: {
        data: ['Browser', 'Node']
      },
      LanguageSDK: {
        data: ['TypeScript']
      }
    }
  },
  Networking: {
    data: {
      Protocol: {
        data: ['WebSockets']
      },
      Topology: {
        data: 'P2P'
      }
    }
  },
  ServerSideData: {
    data: {
      PersistenceMechanism: {
        data: ['N/A']
      },
      DataModelParadigm: {
        data: 'Document'
      }
    }
  },
  ClientSideData: {
    data: {
      QueryAPI: {
        data: ['Async', 'Signals-based Reactivity']
      },
      LocalRefreshLatency: {
        data: '10-50ms'
      },
      PersistenceMechanism: {
        data: ['IndexedDB']
      },
      DataModel: {
        data: 'Document'
      },
      OfflineReads: {
        data: 'Full Support'
      },
      OfflineWrites: {
        data: 'Full local conflict resolution'
      },
      DataSize: {
        data: 'up to 100mb per space'
      }
    }
  },
  SynchronizationStrategy: {
    data: {
      FullOrPartialReplication: {
        data: ['Full Replication']
      },
      ConflictHandling: {
        data: 'Automatic via CRDT'
      },
      WhereResolutionOccurs: {
        data: 'Client'
      },
      WhatGetsSynced: {
        data: {
          ClientToClient: 'see automerge'
        }
      },
      Authority: {
        data: 'Decentralized'
      }
    }
  }
})

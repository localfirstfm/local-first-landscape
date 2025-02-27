// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: '0.0.1',
  Id: 'dxos',
  Name: 'DXOS',
  Website: 'https://dxos.org',
  License: 'MIT',
  Deployment: ['Self-hosted'],
  AppTarget: {
    Platform: {
      data: ['Browser', 'Node']
    },
    LanguageSDK: {
      data: ['TypeScript']
    }
  },
  Networking: {
    Protocol: {
      data: ['WebSockets']
    },
    Topology: {
      data: 'P2P'
    }
  },
  ServerSideData: {
    PersistenceMechanism: {
      data: ['N/A']
    },
    DataModelParadigm: {
      data: 'Document'
    }
  },
  ClientSideData: {
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
  },
  SynchronizationStrategy: {
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
})

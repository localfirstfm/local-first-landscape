// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: '0.0.1',
  Id: 'automerge',
  Name: 'Automerge',
  Website: 'https://automerge.org',
  GetStarted: 'https://automerge.org/docs/hello/',
  License: 'MIT',
  Deployment: ['Self-hosted'],
  Networking: {
    Topology: {
      data: 'P2P via Relay Servers',
      comment: 'Coming soon: Beelay'
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
      data: ['Async']
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
      data: 'up to 5-10mb per doc'
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
        ClientToClient: 'ops',
        ServerToClient: 'future: snapshots via relays'
      }
    },
    Authority: {
      data: 'Decentralized'
    }
  }
})

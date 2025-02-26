// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: '0.0.1',
  Id: 'automerge',
  Name: 'Automerge',
  Website: {
    data: 'https://automerge.org'
  },
  License: {
    data: 'MIT'
  },
  Deployment: {
    data: ['Self-hosted']
  },
  Networking: {
    data: {
      Topology: {
        data: 'P2P via Relay Servers'
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
        data: ['Async']
      },
      PersistenceMechanism: {
        data: ['IndexedDB']
      },
      DataModel: {
        data: 'Document'
      },
      OfflineReads: {
        data: 'Full Support',
        comment: 'Full support within an automerge document.'
      },
      OfflineWrites: {
        data: 'Full local conflict resolution'
      },
      DataSize: {
        data: 'up to 5-10mb per doc'
      }
    }
  },
  SynchronizationStrategy: {
    data: {
      FullOrPartialReplication: {
        data: ['Full Replication'],
        comment: 'Full replication within documents.'
      },
      ConflictHandling: {
        data: 'Automatic via CRDT',
        comment: 'Automatic via CRDTs for Maps, Lists, Text. If there are conflicts: LWW / MVCC.'
      },
      WhereResolutionOccurs: {
        data: 'Client'
      },
      WhatGetsSynced: {
        data: { ClientToClient: 'ops' },
        comment: 'Future: snapshots via relays'
      },
      Authority: {
        data: 'Decentralized'
      }
    }
  }
})

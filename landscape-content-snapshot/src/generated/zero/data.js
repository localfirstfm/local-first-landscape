// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: '0.0.1',
  Id: 'zero',
  Name: 'Zero',
  Website: 'https://getzero.dev',
  Deployment: ['Self-hosted'],
  AppTarget: {
    Platform: {
      data: ['Browser', 'Node']
    },
    FrameworkIntegrations: {
      data: ['React Native']
    }
  },
  Networking: {
    Protocol: {
      data: ['WebSockets', 'HTTP']
    },
    Topology: {
      data: 'Client-Server'
    }
  },
  ServerSideData: {
    PersistenceMechanism: {
      data: ['Postgres']
    },
    DataModelParadigm: {
      data: 'Relational'
    },
    SchemaManagement: {
      data: ['Schema definition', 'Schema migrations']
    },
    ExistingDatabaseSupport: {
      data: 'Yes'
    }
  },
  ClientSideData: {
    QueryAPI: {
      data: ['Reactive relational queries']
    },
    LocalRefreshLatency: {
      data: '<1ms'
    },
    PersistenceMechanism: {
      data: ['IndexedDB']
    },
    DataModel: {
      data: 'Relational'
    },
    OfflineReads: {
      data: 'Developers choose data to be cached via query. Data is available to be queried while offline (even with novel queries)'
    },
    OptimisticUpdates: {
      data: 'Optimistic updates'
    },
    OfflineWrites: {
      data: 'No offline writes'
    },
    DataSize: {
      data: '25MB'
    }
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: {
      data: ['Partial Replication']
    },
    ConflictHandling: {
      data: 'Automatic via either keywise lww or server reconciliation'
    },
    WhereResolutionOccurs: {
      data: 'Server'
    },
    WhatGetsSynced: {
      data: {
        ClientToServer: 'mutations',
        ServerToClient: 'query results'
      }
    },
    Authority: {
      data: 'Centralized'
    }
  }
})

// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: '0.0.1',
  Id: 'zero',
  Name: 'Zero',
  Website: {
    data: 'https://getzero.dev'
  },
  Deployment: {
    data: ['Self-hosted']
  },
  AppTarget: {
    Platform: {
      data: ['Browser', 'Node', 'iOS', 'Android'],
      comment: 'Basically any JS environment.'
    },
    FrameworkIntegrations: {
      data: ['React Native']
    },
    ClientBundleSize: {
      data: '~40kb'
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
      data: ['Schema definition', 'Schema migrations'],
      comment: 'Zero has built-in support for migrating schemas seamlessly across client and server.'
    },
    ExistingDatabaseSupport: {
      data: 'Yes'
    }
  },
  ClientSideData: {
    QueryAPI: {
      data: ['Reactive queries']
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
      data: 'Query Cache',
      comment: 'Developers choose data to be cached via query. Data is available to be queried while offline (even with novel queries)'
    },
    OptimisticUpdates: {
      data: 'Yes'
    },
    OfflineWrites: {
      data: 'No'
    },
    DataSize: {
      data: '25MB'
    }
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: {
      data: ['Partial Replication'],
      comment: 'Via query caching.'
    },
    ConflictHandling: {
      data: 'Server reconciliation or LWW',
      comment: 'Automatic via keywise LWW or server reconciliation.'
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
    },
    Latency: {
      data: 'Typically ~10ms over network time client<->server.'
    }
  }
})

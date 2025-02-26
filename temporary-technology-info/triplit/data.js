// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: '0.0.1',
  Id: 'triplit',
  Name: 'Triplit',
  Website: {
    data: 'https://www.triplit.dev'
  },
  License: {
    data: 'GPL3'
  },
  Deployment: {
    data: ['Self-hosted', 'Hosted']
  },
  AppTarget: {
    data: {
      Platform: {
        data: ['Browser', 'Node']
      },
      LanguageSDK: {
        data: ['TypeScript']
      },
      FrameworkIntegrations: {
        data: ['React', 'Vue', 'Svelte', 'Angular', 'React Native']
      }
    }
  },
  Networking: {
    data: {
      Protocol: {
        data: ['WebSockets', 'HTTP']
      },
      Topology: {
        data: 'Client-Server'
      }
    }
  },
  ServerSideData: {
    data: {
      PersistenceMechanism: {
        data: ['IndexedDB', 'SQLite', 'LevelDB', 'RocksDB'],
        comment: 'Adapter for k-v stores.'
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
        data: '<1 ms'
      },
      PersistenceMechanism: {
        data: ['IndexedDB', 'SQLite', 'LevelDB', 'RocksDB'],
        comment: 'Adapter for k-v stores.'
      },
      DataModel: {
        data: 'Relational'
      },
      SchemaManagement: {
        data: ['Derived types']
      },
      OfflineReads: {
        data: 'Query Cache',
        comment: 'Subscribed queries have full db support: novel queries, counts, sums, averages, etc'
      },
      OfflineWrites: {
        data: 'Cached offline writes',
      },
      DataSize: {
        data: 'limited by device capabilities'
      }
    }
  },
  SynchronizationStrategy: {
    data: {
      FullOrPartialReplication: {
        data: ['Partial Replication'],
        comment: 'Partial replica only, via query caching.'
      },
      ConflictHandling: {
        data: 'LWW at the attribute level'
      },
      WhereResolutionOccurs: {
        data: 'Server'
      },
      WhatGetsSynced: {
        data: {
          ClientToServer: 'triple writes'
        }
      },
      Authority: {
        data: 'Centralized'
      }
    }
  },
  AuthIdentity: {
    data: {
      AuthenticationMethod: {
        data: ['JWT Tokens']
      },
      AuthorizationPermissions: {
        data: 'Custom mapping from Schema to ACL roles'
      }
    }
  }
})

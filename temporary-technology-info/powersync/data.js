// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: '0.0.1',
  Id: 'powersync',
  Name: 'PowerSync',
  Website: {
    data: 'https://powersync.com'
  },
  License: {
    data: 'FSL-1.1-Apache-2.0'
  },
  Deployment: {
    data: ['Self-hosted', 'Hosted']
  },
  AppTarget: {
    data: {
      Platform: {
        data: ['Browser', 'iOS', 'Android', 'macOS', 'WASM']
      },
      LanguageSDK: {
        data: ['TypeScript', 'Swift', 'Kotlin', 'Rust', 'dart']
      },
      FrameworkIntegrations: {
        data: ['React', 'React Native', 'Vue', 'Svelte', 'SolidJS', 'Flutter']
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
        data: ['Postgres', 'MongoDB', 'MySQL']
      },
      DataModelParadigm: {
        data: 'Relational'
      },
      ExistingDatabaseSupport: {
        data: 'Works with backend source databases: Postgres, MongoDB, MySQL'
      },
      DataSize: {
        data: 'No theoretical limit'
      }
    }
  },
  ClientSideData: {
    data: {
      QueryAPI: {
        data: ['Async', 'Signals-based Reactivity']
      },
      PersistenceMechanism: {
        data: ['SQLite', 'IndexedDB', 'OPFS']
      },
      PersistenceFeatures: {
        data: 'FTS, Indexes, Transactions'
      },
      DataModel: {
        data: 'Relational'
      },
      OfflineReads: {
        data: 'Full Support'
      },
      OptimisticUpdates: {
        data: 'Yes'
      },
      OfflineWrites: {
        data: 'Yes'
      }
    }
  },
  SynchronizationStrategy: {
    data: {
      FullOrPartialReplication: {
        data: ['Full Replication', 'Partial Replication']
      },
      ConflictHandling: {
        data: 'Custom business logic'
      },
      WhereResolutionOccurs: {
        data: 'Server'
      },
      WhatGetsSynced: {
        data: {
          ServerToClient: 'ops',
          ClientToServer: 'mutations'
        }
      },
      Authority: {
        data: 'Centralized'
      }
    }
  },
  AuthIdentity: {
    data: {
      Encryption: {
        data: 'transport-level and storage-level locally on the device using SQLCipher; E2EE can also be accomplished by syncing encrypted data and decrypting on client'
      },
      AuthenticationMethod: {
        data: ['JWT Tokens']
      },
      AuthorizationPermissions: {
        data: 'Reads: Access to data is controlled by authenticated parameters in JWT used in Sync Rules\n\nWrites: Access controlled using developer\'s own backend (through which writes go to)'
      }
    }
  },
  DevelopmentWorkflowsDX: {
    data: {
      DebuggingTools: {
        data: ['Dashboard', 'Data Inspector']
      },
      CLI: {
        data: 'CLI for managing cloud instances of PowerSync Service'
      }
    }
  }
})

// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: 1,
  Id: 'powersync',
  Name: 'PowerSync',
  Website: 'https://powersync.com',
  License: 'FSL-Apach 2.0',
  Deployment: ['Self-hosted', 'Hosted'],
  AppTarget: {
    Platform: {
      data: ['Browser', 'iOS', 'Android', 'macOS', 'WASM']
    },
    LanguageSDK: {
      data: ['TypeScript', 'Swift', 'Kotlin', 'Rust', 'dart']
    },
    FrameworkIntegrations: {
      data: ['React', 'React Native', 'Vue', 'Svelte', 'SolidJS', 'Flutter']
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
  },
  ClientSideData: {
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
  },
  SynchronizationStrategy: {
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
  },
  AuthIdentity: {
    Encryption: {
      data: 'transport-level and storage-level locally on the device using SQLCipher; E2EE can also be accomplished by syncing encrypted data and decrypting on client'
    },
    AuthenticationMethod: {
      data: ['JWT Tokens']
    },
    AuthorizationPermissions: {
      data: 'Reads: Access to data is controlled by authenticated parameters in JWT used in Sync Rules\n\nWrites: Access controlled using developer\'s own backend (through which writes go to)'
    }
  },
  DevelopmentWorkflowsDX: {
    DebuggingTools: {
      data: ['Dashboard', 'Data Inspector']
    },
    CLI: {
      data: 'CLI for managing cloud instances of PowerSync Service'
    }
  }
})

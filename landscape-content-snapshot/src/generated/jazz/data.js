// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: 1,
  Id: 'jazz',
  Name: 'Jazz',
  License: 'MIT',
  Deployment: ['Self-hosted', 'Hosted'],
  AppTarget: {
    Platform: {
      data: ['Browser', 'Node', 'Node']
    },
    LanguageSDK: {
      data: ['TypeScript']
    },
    FrameworkIntegrations: {
      data: ['React', 'React Native', 'Vue', 'Svelte']
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
      data: ['SQLite', 'Custom']
    },
    DataModelParadigm: {
      data: 'Document'
    },
    SchemaManagement: {
      data: ['Schema definition', 'Derived types', 'Schema migrations']
    },
    ExistingDatabaseSupport: {
      data: 'manual sync to existing DBs'
    },
    DataSize: {
      data: 'Unlimited, granular load & sync'
    }
  },
  ClientSideData: {
    QueryAPI: {
      data: ['Sync', 'Signals-based Reactivity']
    },
    LocalRefreshLatency: {
      data: '~1ms'
    },
    PersistenceMechanism: {
      data: ['IndexedDB', 'SQLite', 'Custom']
    },
    DataModel: {
      data: 'Document'
    },
    SchemaManagement: {
      data: ['Schema definition', 'Derived types', 'Schema migrations']
    },
    OfflineReads: {
      data: 'Full Support'
    },
    OfflineWrites: {
      data: 'Full local conflict resolution'
    },
    DataSize: {
      data: 'currently limited by RAM, soon only limited by disk'
    }
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: {
      data: ['Partial Replication']
    },
    ConflictHandling: {
      data: 'Automatic via CRDT'
    },
    WhereResolutionOccurs: {
      data: 'Client'
    },
    WhatGetsSynced: {
      data: {
        ClientToClient: 'CoValue headers, CoValue session diffs (transactions)'
      }
    },
    Authority: {
      data: 'Decentralized'
    }
  },
  AuthIdentity: {
    Encryption: {
      data: 'Built-in e2ee'
    },
    AuthenticationMethod: {
      data: ['Built-in']
    },
    AuthorizationPermissions: {
      data: 'Built-in cryptographical hierarchical RBAC'
    }
  },
  UIRelated: {
    RichTextEditing: {
      data: 'coming soon (incl. ProseMirror/TipTap/Lexical integration)'
    },
    Components: {
      data: ['File upload', 'progressive image loading']
    }
  },
  DevelopmentWorkflowsDX: {
    DebuggingTools: {
      data: ['Data Inspector']
    },
    CLI: {
      data: 'CLI for running local sync & storage server, for creating worker account'
    },
    TypeSupport: {
      data: 'Full type support without extra config'
    }
  }
})

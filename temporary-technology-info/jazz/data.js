// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: '0.0.1',
  Id: 'jazz',
  Name: 'Jazz',
  License: {
    data: 'MIT'
  },
  Deployment: {
    data: ['Self-hosted', 'Hosted']
  },
  AppTarget: {
    Platform: {
      data: ['Browser', 'Node', 'iOS', 'Android'],
      comment: 'iOS and Android support via React Native.'
    },
    LanguageSDK: {
      data: ['TypeScript']
    },
    FrameworkIntegrations: {
      data: ['React', 'React Native', 'Vue', 'Svelte']
    },
    ClientBundleSize: {
      data: '112kb gzipped (jazz-react)'
    }
  },
  Networking: {
    Protocol: {
      data: ['WebSockets']
    },
    Topology: {
      data: 'P2P',
      comment: 'P2P via sync & storage servers. Servers are not stateless.'
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
      data: ['IndexedDB', 'SQLite']
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
      data: 'limited by RAM',
      comment: 'Soon limited only by disk.'
    },
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: {
      data: ['Partial Replication'],
      comment: 'Partial replication on-demand or with explicit load depths.'
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
    },
    Latency: {
      data: 'Close to network latency'
    },
    Throughput: {
      data: 'Roughly 5k transactions/s (structured data) or ~50MB/s (binary data)',
      comment: 'Soon: limited only by number of participants (updates of any size by up to 5k participants/s)'
    },
    Concurrency: {
      data: 'Support for granular prioritization'
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
      data: 'Coming soon (incl. ProseMirror/TipTap/Lexical integration)'
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

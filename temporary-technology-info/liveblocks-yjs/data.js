// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: 1,
  Id: 'liveblocks-yjs',
  Name: 'Liveblocks Yjs',
  Website: 'https://liveblocks.io',
  License: 'Proprietary',
  Deployment: ['Hosted'],
  AppTarget: {
    Platform: {
      data: ['Browser', 'Node']
    },
    LanguageSDK: {
      data: ['TypeScript']
    },
    FrameworkIntegrations: {
      data: ['React']
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
      data: ['Cloudflare Durable Object Storage', 'IndexedDB']
    },
    DataModelParadigm: {
      data: 'Document'
    },
    SchemaManagement: {
      data: ['None']
    },
    ExistingDatabaseSupport: {
      data: 'manual sync to existing DBs',
      comment: 'Does not require a datastore, but you can migrate or automatically sync to your database with webhooks/REST API'
    }
  },
  ClientSideData: {
    QueryAPI: {
      data: ['Yjs'],
      comment: 'Standard Yjs API'
    },
    LocalRefreshLatency: {
      data: '<1ms',
      comment: 'Changes on the client: <1ms. Other clients receive updates up to 60 times per second(16ms), configurable.'
    },
    PersistenceMechanism: {
      data: ['Yjs']
    },
    DataModel: {
      data: 'Document'
    },
    SchemaManagement: {
      data: ['None']
    },
    OfflineReads: {
      data: 'in beta'
    },
    OptimisticUpdates: {
      data: 'Yes',
    },
    OfflineWrites: {
      data: 'in beta',
      comment: '`offlineSupport_experimental: true`'
    },
    DataSize: {
      data: 'limited by memory',
      comment: 'It depends on the in memory size of the yjs store and the history of the document.'
    }
  },
  SynchronizationStrategy: {
    ConflictHandling: {
      data: 'Automatic via CRDT'
    },
    WhereResolutionOccurs: {
      data: 'Server'
    },
    WhatGetsSynced: {
      data: {
        ClientToServer: 'yjs encoded updates'
      }
    },
    Authority: {
      data: 'Centralized'
    }
  },
  AuthIdentity: {
    AuthenticationMethod: {
      data: ['Built-in', 'Full Custom']
    },
    AuthorizationPermissions: {
      data: 'ID tokens and Access tokens',
      comment: 'ID tokens (= permissions based on whats allowed on a per-room basis). Access tokens (= permissions granted in the token directly)'
    }
  },
  UIRelated: {
    RichTextEditing: {
      data: 'Liveblocks Text Editor',
      comment: 'Wrapper around Yjs with Lexical and TipTap plugins.'
    },
    Components: {
      data: ['Comments/Threads', 'Notifications', 'Y.js plugins', 'Presence'],
      comment: 'Presence support via yjs-awareness.'
    }
  },
  DevelopmentWorkflowsDX: {
    DebuggingTools: {
      data: ['DevTools', 'Dashboard', 'Data Inspector'],
      comment: 'Viewing/editing data, events, usage, etc.'
    },
    CLI: {
      data: 'CLI for installing examples, updating packages, creating your typescript config'
    }
  }
})

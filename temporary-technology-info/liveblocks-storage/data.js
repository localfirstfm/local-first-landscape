// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: '0.0.1',
  Id: 'liveblocks-storage',
  Name: 'Liveblocks Storage',
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
      data: ['React', 'Zustand', 'Redux']
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
      data: ['Cloudflare Durable Object Storage', 'SQLite']
    },
    DataModelParadigm: {
      data: 'Document'
    },
    SchemaManagement: {
      data: ['Schema definition', 'Schema validation']
    },
    ExistingDatabaseSupport: {
      data: 'Webhooks and REST API'
    }
  },
  ClientSideData: {
    LocalRefreshLatency: {
      data: '16ms'
    },
    PersistenceMechanism: {
      data: ['Liveblocks Storage']
    },
    DataModel: {
      data: 'Document'
    },
    SchemaManagement: {
      data: ['Schema definition']
    },
    OfflineReads: {
      data: 'Previously accessed data is stored in-memory'
    },
    OfflineWrites: {
      data: 'Full cached writes, stored in-memory, server will resolve conflict'
    },
    DataSize: {
      data: 'limited by device capabilities'
    }
  },
  SynchronizationStrategy: {
    ConflictHandling: {
      data: 'Custom: values: LWW, LiveObject: LWW at attribute level, LiveMap: LWW at entry level, LiveList: fractional indexing (for insertions) or LWW (for replacements)'
    },
    WhereResolutionOccurs: {
      data: 'Server'
    },
    WhatGetsSynced: {
      data: {
        ClientToServer: 'ops',
        ServerToClient: 'ops, acks, and fix-ops (when conflict was resolved)'
      }
    },
    Authority: {
      data: 'Centralized'
    }
  },
  AuthIdentity: {
    Encryption: {
      data: 'transport-level (wss:// or https://)'
    },
    AuthenticationMethod: {
      data: ['JWT tokens', 'Public key']
    },
    AuthorizationPermissions: {
      data: 'ID tokens and Access tokens'
    }
  },
  UIRelated: {
    Components: {
      data: ['Comments/Threads', 'Notifications']
    }
  },
  DevelopmentWorkflowsDX: {
    DebuggingTools: {
      data: ['DevTools', 'Dashboard', 'Data Inspector']
    },
    CLI: {
      data: 'CLI for installing examples, updating packages, creating your typescript config'
    },
    TypeSupport: {
      data: 'Full type support (via liveblocks.config.ts)'
    }
  }
})

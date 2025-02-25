// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: '0.0.1',
  Id: 'liveblocks-storage',
  Name: 'Liveblocks Storage',
  Website: {
    data: 'https://liveblocks.io'
  },
  License: {
    data: 'Proprietary'
  },
  Deployment: {
    data: ['Hosted']
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
        data: ['React', 'Zustand', 'Redux']
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
    }
  },
  ClientSideData: {
    data: {
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
    }
  },
  SynchronizationStrategy: {
    data: {
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
    }
  },
  AuthIdentity: {
    data: {
      Encryption: {
        data: 'transport-level (wss:// or https://)'
      },
      AuthenticationMethod: {
        data: ['JWT tokens', 'Public key']
      },
      AuthorizationPermissions: {
        data: 'ID tokens and Access tokens'
      }
    }
  },
  UIRelated: {
    data: {
      Components: {
        data: ['Comments/Threads', 'Notifications']
      }
    }
  },
  DevelopmentWorkflowsDX: {
    data: {
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
  }
})

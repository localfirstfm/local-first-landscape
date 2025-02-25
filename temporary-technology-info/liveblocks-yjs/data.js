// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: '0.0.1',
  Id: 'liveblocks-yjs',
  Name: 'Liveblocks Yjs',
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
        data: ['React']
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
        data: ['Cloudflare Durable Object Storage', 'IndexedDB']
      },
      DataModelParadigm: {
        data: 'Document'
      }
    }
  },
  ClientSideData: {
    data: {
      LocalRefreshLatency: {
        data: '<1ms'
      },
      PersistenceMechanism: {
        data: ['Yjs']
      },
      DataModel: {
        data: 'Document'
      },
      DataSize: {
        data: 'it depends on the in memory size of the yjs store and the history of the document'
      }
    }
  },
  SynchronizationStrategy: {
    data: {
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
    }
  },
  AuthIdentity: {
    data: {
      AuthenticationMethod: {
        data: ['Built-in', 'Full Custom']
      },
      AuthorizationPermissions: {
        data: 'ID tokens and Access tokens'
      }
    }
  },
  UIRelated: {
    data: {
      RichTextEditing: {
        data: 'Liveblocks Text Editor (wrapper around Yjs with Lexical and TipTap plugins)'
      },
      Components: {
        data: ['Comments/Threads', 'Notifications', 'Y.js plugins']
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
      }
    }
  }
})

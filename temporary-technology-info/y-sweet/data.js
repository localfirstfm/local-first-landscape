// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: '0.0.1',
  Id: 'y-sweet',
  Name: 'Y-Sweet',
  Website: {
    data: 'https://y-sweet.dev'
  },
  License: {
    data: 'MIT'
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
        data: ['TypeScript', 'Python']
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
        data: ['S3-compatible object store']
      },
      DataModelParadigm: {
        data: 'Document'
      },
      ExistingDatabaseSupport: {
        data: 'Yes, in the "Figma architecture" sense: ground-truth document data only lives on S3, but document metadata exists in your existing DB'
      }
    }
  },
  ClientSideData: {
    data: {
      LocalRefreshLatency: {
        data: '<1 ms'
      },
      PersistenceMechanism: {
        data: ['Yes']
      },
      DataModel: {
        data: 'Document'
      },
      OfflineReads: {
        data: 'Yes'
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
      ConflictHandling: {
        data: 'CRDT (YATA)'
      },
      WhereResolutionOccurs: {
        data: 'Server'
      },
      WhatGetsSynced: {
        data: {
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
        data: 'Subject to the underlying object store used; most encrypt at rest by default; AES-GCM encryption on the client'
      },
      AuthenticationMethod: {
        data: ['Auth delegation from your application server based on temporary tokens']
      }
    }
  },
  UIRelated: {
    data: {
      Components: {
        data: ['Yes\nAnything compatible with Yjs (Slate, BlockNote, Quill, Lexical, etc.)']
      }
    }
  }
})
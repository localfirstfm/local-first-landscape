// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: 1,
  Id: 'y-sweet',
  Name: 'Y-Sweet',
  Website: 'https://y-sweet.dev',
  License: 'MIT',
  Deployment: ['Self-hosted', 'Hosted'],
  AppTarget: {
    Platform: {
      data: ['Browser', 'Node']
    },
    LanguageSDK: {
      data: ['TypeScript', 'Python']
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
      data: ['S3-compatible object store']
    },
    DataModelParadigm: {
      data: 'Document'
    },
    ExistingDatabaseSupport: {
      data: 'Yes, in the "Figma architecture" sense: ground-truth document data only lives on S3, but document metadata exists in your existing DB'
    }
  },
  ClientSideData: {
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
  },
  SynchronizationStrategy: {
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
  },
  AuthIdentity: {
    Encryption: {
      data: 'Subject to the underlying object store used; most encrypt at rest by default; AES-GCM encryption on the client'
    },
    AuthenticationMethod: {
      data: ['Auth delegation from your application server based on temporary tokens']
    }
  },
  UIRelated: {
    Components: {
      data: ['Yes\nAnything compatible with Yjs (Slate, BlockNote, Quill, Lexical, etc.)']
    }
  }
})
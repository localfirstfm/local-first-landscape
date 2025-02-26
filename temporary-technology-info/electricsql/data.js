// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: '0.0.1',
  Id: 'electricsql',
  Name: 'ElectricSQL',
  Website: {
    data: 'https://electric-sql.com'
  },
  License: {
    data: 'Apache 2'
  },
  Deployment: {
    data: ['Self-hosted']
  },
  AppTarget: {
    data: {
      Platform: {
        data: ['Browser', 'Node']
      }
    }
  },
  ServerSideData: {
    data: {
      PersistenceMechanism: {
        data: ['Postgres']
      },
      DataModelParadigm: {
        data: 'Relational'
      }
    }
  },
  ClientSideData: {
    data: {
      PersistenceMechanism: {
        data: ['IndexedDB', 'PGLite via OPFS'],
        comment: 'Depends on what you are syncing to.'
      },
      DataModel: {
        data: 'Relational',
        comment: '`useShape` in react gives you an array of rows. Syncing to db gives you actual relations between tables.'
      },
      OfflineReads: {
        data: 'Full Support',
        comment: 'Full support when shape is synced.'
      },
      DataSize: {
        data: 'Limited by size of hard drive'
      }
    }
  },
  SynchronizationStrategy: {
    data: {
      FullOrPartialReplication: {
        data: ['Partial Replication'],
        comment: 'Partial replication via shapes.'
      },
      ConflictHandling: {
        data: 'No Support'
      },
      WhereResolutionOccurs: {
        data: 'Server'
      },
      WhatGetsSynced: {
        data: {
          ServerToClient: 'shape updates'
        }
      },
      Authority: {
        data: 'Centralized'
      }
    }
  }
})

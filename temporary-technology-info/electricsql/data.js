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
        data: ['IndexedDB', 'PGLite via OPFS']
      },
      DataModel: {
        data: 'Relational'
      },
      OfflineReads: {
        data: 'Full Support'
      },
      DataSize: {
        data: '10-100mb depending on storage chosen'
      }
    }
  },
  SynchronizationStrategy: {
    data: {
      FullOrPartialReplication: {
        data: ['Partial Replication']
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

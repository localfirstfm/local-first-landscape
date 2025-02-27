// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: 1,
  Id: 'electricsql',
  Name: 'ElectricSQL',
  Website: 'https://electric-sql.com',
  License: 'Apache',
  Deployment: ['Self-hosted'],
  AppTarget: {
    Platform: {
      data: ['Browser', 'Node']
    }
  },
  ServerSideData: {
    PersistenceMechanism: {
      data: ['Postgres']
    },
    DataModelParadigm: {
      data: 'Relational'
    }
  },
  ClientSideData: {
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
  },
  SynchronizationStrategy: {
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
})

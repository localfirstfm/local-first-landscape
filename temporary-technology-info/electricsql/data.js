// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: 1,
  Id: 'electricsql',
  Name: 'ElectricSQL',
  Website: 'https://electric-sql.com',
  License: 'Apache 2.0',
  Deployment: ['Self-hosted', 'Hosted'],
  AppTarget: {
    Platform: {
      data: [
        'Browser',
        'React Native',
        'iOS',
        'Android',
        'macOS',
        'WASM',
        'Linux',
        'Node',
        'Javascript',
        'Typescript',
        'Elixir'
      ]
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
      data: [
        'In-Memory',
        'Browser File Cache',
        'Localstorage',
        'IndexedDB',
        'OPFS',
        'SQLite',
        'PGLite',
        'React Query',
        'TanStack Optimistic',
        'Cloudflare Durable Object Storage',
        'Cloudflare D1',
        'Redis',
        'Custom',
      ],
      comment: `
        Electric syncs data out of Postgres into anything you like.
        From an in-memory state variable to a local embedded database.
      `
    },
    DataModel: {
      data: 'Log, Object or relational',
      comment: `
        Data syncs in as a log of logical change operations.
        These can be materialized as collections of rows,
        or into an embedded database as relations in tables.
      `
    },
    OfflineReads: {
      data: 'Full Support',
      comment: 'Full support when shape is synced.'
    },
    DataSize: {
      data: 'Limited by size of hard drive'
    }
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: {
      data: ['Partial Replication'],
      comment: 'Partial replication via shapes.'
    },
    ConflictHandling: {
      data: `
        Electric handles read-path sync. It doesn't prescribe a solution for writes
        and thus avoids handling conflicts. It does provide documented patterns
        and framework integrations for handling writes and optimistic state.
        These implement a range of strategies for conflict handling.
      `
    },
    WhereResolutionOccurs: {
      data: 'Server'
    },
    WhatGetsSynced: {
      data: {
        ServerToClient: `
          Shape logs, in the form of a stream of change messages
          (inserts, updates and deletes) and control messages
          (up-to-date, must-refetch).
        `
      }
    },
    Authority: {
      data: `
        Centralized -- Postgres is the source of truth, durability and total order.
      `
    }
  }
})

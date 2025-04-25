import { Schema } from 'effect'

const orString = <A>(_stringLitSchema: Schema.Schema<A>) =>
  Schema.String as Schema.Schema<A | (string & Record<never, never>)>

export const DataWithComment = <A, I>(_dataSchema: Schema.Schema<A, I>) =>
  Schema.Struct({
    data: _dataSchema,
    comment: Schema.String.pipe(Schema.optional),
  })

export type DataWithComment<A, I = A> = ReturnType<
  typeof DataWithComment<A, I>
>['Type']

export const Score = Schema.Struct({
  MultiDeviceCrossDevice: DataWithComment(Schema.Literal('Yes', 'No'))
    .annotations({
      description: `Does the user's data replicate across their devices?`,
    })
    .pipe(Schema.optional),
  MultiDeviceDecentralized: DataWithComment(Schema.Literal('Yes', 'No'))
    .annotations({
      description: 'Can data replication work without a centralized server?',
    })
    .pipe(Schema.optional),
  OfflineSupportWrites: DataWithComment(Schema.Literal('Yes', 'No'))
    .annotations({
      description: 'Can writes be performed while offline?',
    })
    .pipe(Schema.optional),
  OfflineSupportArbitraryQueries: DataWithComment(Schema.Literal('Yes', 'No'))
    .annotations({
      description: 'Can arbitrary queries be performed while offline?',
    })
    .pipe(Schema.optional),
  UserOwnedData: DataWithComment(Schema.Literal('Yes', 'No'))
    .annotations({
      description:
        "Can the user's full dataset be stored locally and can they access it?",
    })
    .pipe(Schema.optional),
  CollaborationMultiEdit: DataWithComment(Schema.Literal('Yes', 'No'))
    .annotations({
      description: 'Can multiple users edit the same data simultaneously?',
    })
    .pipe(Schema.optional),
  CollaborationConflictingWrites: DataWithComment(Schema.Literal('Yes', 'No'))
    .annotations({
      description: 'Can conflicting writes be resolved automatically?',
    })
    .pipe(Schema.optional),
  SecurityE2EE: DataWithComment(Schema.Literal('Yes', 'No'))
    .annotations({
      description: "Is the user's data encrypted end-to-end?",
    })
    .pipe(Schema.optional),
  SecurityUserKeys: DataWithComment(Schema.Literal('Yes', 'No'))
    .annotations({
      description: "Is the user's data encrypted with their own keys?",
    })
    .pipe(Schema.optional),
  LongevityNoProprietaryServer: DataWithComment(Schema.Literal('Yes', 'No'))
    .annotations({
      description:
        'Can the software fully function without a proprietary server component?',
    })
    .pipe(Schema.optional),
})

export const AppTarget = Schema.Struct({
  Platform: DataWithComment(
    Schema.Literal(
      'Browser',
      'Node',
      'iOS',
      'Android',
      'macOS',
      'WASM',
      'Linux',
    )
      .pipe(orString, Schema.Array)
      .annotations({
        description:
          'The platform(s) available to apps created with the technology.',
      }),
  ).pipe(Schema.optional),
  LanguageSDK: DataWithComment(
    Schema.Literal(
      'TypeScript',
      'JavaScript',
      'Swift',
      'Kotlin',
      'C#',
      'Rust',
      'Java',
      'Python',
    )
      .pipe(orString, Schema.Array)
      .annotations({
        description: 'The language(s) the app can be written in.',
      }),
  ).pipe(Schema.optional),
  FrameworkIntegrations: DataWithComment(
    Schema.Literal(
      'React',
      'Vue',
      'Svelte',
      'React Native',
      'Flutter',
      'SwiftUI',
      'Zustand',
      'Jetpack Compose',
    )
      .pipe(orString, Schema.Array)
      .annotations({
        description: 'The framework(s) the app can be built with.',
      }),
  ).pipe(Schema.optional),
  ClientBundleSize: DataWithComment(
    Schema.String.annotations({
      description: 'The size of the client bundle.',
    }),
  ).pipe(Schema.optional),
})

export const Networking = Schema.Struct({
  Protocol: DataWithComment(
    Schema.Literal(
      'WebSockets',
      'HTTP',
      'SSE',
      'WiFi LAN',
      'Bluetooth',
      'P2P WiFi',
      'TCP',
      'Quic',
    )
      .pipe(orString, Schema.Array)
      .annotations({
        description:
          'Supported networking protocols for synchronizing changes between clients.',
      }),
  ).pipe(Schema.optional),
  Topology: DataWithComment(
    Schema.Literal('P2P', 'P2P via Relay Servers', 'Client-Server')
      .pipe(orString)
      .annotations({
        description:
          'Whether clients synchronize with each other directly or through a server.',
      }),
  ).pipe(Schema.optional),
}).annotations({ title: 'Networking' })

export const ServerSideData = Schema.Struct({
  PersistenceMechanism: DataWithComment(
    Schema.Literal(
      'S3 (or compatible)',
      'Postgres',
      'MongoDB',
      'MySQL',
      'SQLite',
      'Custom',
      'N/A',
      'Cloudflare Durable Object Storage',
    )
      .pipe(orString, Schema.Array)
      .annotations({
        description: 'How the technology persists data on a server.',
      }),
  ).pipe(Schema.optional),
  DataSize: DataWithComment(
    Schema.Literal(
      '100MB',
      '1GB',
      '10GB',
      '100GB',
      '1TB',
      '10TB',
      '100TB',
      '1PB',
      '10PB',
      '100PB',
    )
      .pipe(orString)
      .annotations({
        description: 'The size of the data supported on a server.',
      }),
  ).pipe(Schema.optional),
  DataModelParadigm: DataWithComment(
    Schema.Literal('Relational', 'Document').pipe(orString).annotations({
      description: 'The paradigm used to interact with persisted data.',
    }),
  ).pipe(Schema.optional),
  SchemaManagement: DataWithComment(
    Schema.Literal(
      'Schema definition',
      'Validate schemas on write',
      'Schema migrations',
    )
      .pipe(orString, Schema.Array)
      .annotations({
        description:
          'Supported features for working with schemas on the server.',
      }),
  ).pipe(Schema.optional),
  ExistingDatabaseSupport: DataWithComment(
    Schema.String.annotations({
      description: 'How the technology integrates with existing databases.',
    }),
  ).pipe(Schema.optional),
}).annotations({ title: 'ServerSideData' })

export const ClientSideData = Schema.Struct({
  QueryAPI: DataWithComment(
    Schema.Literal(
      'Async',
      'Sync',
      'Signals-based Reactivity',
      'Reactive queries',
    )
      .pipe(orString, Schema.Array)
      .annotations({
        description: 'How the client queries the server for data.',
      }),
  ).pipe(Schema.optional),
  LocalRefreshLatency: DataWithComment(
    Schema.Literal('~1ms', '~10-100ms', '~1s', '>10s')
      .pipe(orString)
      .annotations({
        description:
          'The refresh rate for local changes, ignoring network latency.',
      }),
  ).pipe(Schema.optional),
  PersistenceMechanism: DataWithComment(
    Schema.Literal(
      'Custom',
      'IndexedDB',
      'SQLite',
      'PGLite via OPFS',
      'Yjs',
      'LevelDB',
      'RocksDB',
    )
      .pipe(orString, Schema.Array)
      .annotations({
        description: 'How the technology persists data on a client.',
      }),
  ).pipe(Schema.optional),
  PersistenceFeatures: DataWithComment(
    Schema.Literal('Full-text search', 'Indexes', 'Transactions')
      .pipe(orString)
      .annotations({
        description:
          'Additional features supported by the client-side persistence mechanism.',
      }),
  ).pipe(Schema.optional),
  DataModel: DataWithComment(
    Schema.Literal('Document', 'Relational').pipe(orString).annotations({
      description: 'The data model used on the client.',
    }),
  ).pipe(Schema.optional),
  SchemaManagement: DataWithComment(
    Schema.Literal(
      'Schema definition',
      'Schema validation on write',
      'Schema migrations',
    )
      .pipe(orString, Schema.Array)
      .annotations({
        description:
          'Supported features for working with schemas on the client.',
      }),
  ).pipe(Schema.optional),
  OfflineReads: DataWithComment(
    Schema.Literal('Full Support', 'Query Cache', 'No Support')
      .pipe(orString)
      .annotations({
        description: 'Whether client can read and query data when offline.',
      }),
  ).pipe(Schema.optional),
  OptimisticUpdates: DataWithComment(
    Schema.Literal('Yes', 'No').pipe(orString).annotations({
      description: 'Whether client optimistically updates on write.',
    }),
  ).pipe(Schema.optional),
  OfflineWrites: DataWithComment(
    Schema.Literal(
      'Local conflict resolution',
      'Cached offline writes',
      'No support',
    )
      .pipe(orString)
      .annotations({
        description: 'How client handles writes when offline.',
      }),
  ).pipe(Schema.optional),
  DataSize: DataWithComment(
    Schema.String.annotations({
      description: 'The size of the data supported on a client.',
    }),
  ).pipe(Schema.optional),
}).annotations({ title: 'ClientSideData' })

export const SynchronizationStrategy = Schema.Struct({
  FullOrPartialReplication: DataWithComment(
    Schema.Literal('Full Replication', 'Partial Replication')
      .pipe(orString, Schema.Array)
      .annotations({
        description:
          'Whether the technology supports full or partial replication.',
      }),
  ).pipe(Schema.optional),
  ConflictHandling: DataWithComment(
    Schema.Literal(
      'Automatic via CRDT', // TODO: Capture data types that support CRDTs
      'Rebase via mutations',
      'Server reconciliation',
      'No Support (Implicit LWW)',
      'Custom conflict resolution supported',
    )
      .pipe(orString)
      .annotations({
        description: 'How the technology handles conflicts.',
      }),
  ).pipe(Schema.optional),
  WhereResolutionOccurs: DataWithComment(
    Schema.Literal('Server', 'Client').pipe(orString).annotations({
      description: 'Where the resolution of conflicts occurs.',
    }),
  ).pipe(Schema.optional),
  WhatGetsSynced: DataWithComment(
    Schema.Struct({
      ClientToServer: Schema.String.pipe(Schema.optional),
      ServerToClient: Schema.String.pipe(Schema.optional),
      ClientToClient: Schema.String.pipe(Schema.optional),
    }).annotations({
      description:
        'What gets synced between clients and (potentially) servers.',
    }),
  ).pipe(Schema.optional),
  Authority: DataWithComment(
    Schema.Literal('Decentralized', 'Centralized').pipe(orString).annotations({
      description: 'Whether the technology is decentralized or centralized.',
    }),
  ).pipe(Schema.optional),
  Latency: DataWithComment(
    Schema.Literal('~1ms', '~10-100ms', '~1s', '>10s').pipe(orString),
  ).pipe(Schema.optional),
  Throughput: DataWithComment(Schema.String).pipe(Schema.optional),
  Concurrency: DataWithComment(Schema.String).pipe(Schema.optional),
}).annotations({ title: 'SynchronizationStrategy' })

export const AuthIdentity = Schema.Struct({
  Encryption: DataWithComment(
    Schema.Literal('Yes', 'No').pipe(orString).annotations({
      description: 'Is encryption performed with user keys or server keys.',
    }),
  ).pipe(Schema.optional),
  AuthenticationMethod: DataWithComment(
    Schema.Literal(
      'Tokens',
      'Built-in',
      'Full Custom',
      'JWT Tokens',
      'Public keys',
    )
      .pipe(orString, Schema.Array)
      .annotations({
        description: 'The method of authentication.',
      }),
  ).pipe(Schema.optional),
  AuthorizationPermissions: DataWithComment(
    Schema.Literal('ACLs', 'RBAC', 'Custom').pipe(orString).annotations({
      description: 'How authorization and permissions are managed.',
    }),
  ).pipe(Schema.optional),
}).annotations({ title: 'AuthIdentity' })

export const UIRelated = Schema.Struct({
  RichTextEditing: DataWithComment(
    Schema.Literal('Yes', 'No').pipe(orString).annotations({
      description: 'Whether the technology integrates with a rich text editor.',
    }),
  ).pipe(Schema.optional),
  Components: DataWithComment(
    Schema.String.pipe(Schema.Array).annotations({
      description: 'Native components provided by the technology.',
    }),
  ).pipe(Schema.optional),
}).annotations({ title: 'UIRelated' })

export const DevelopmentWorkflowsDX = Schema.Struct({
  DebuggingTools: DataWithComment(
    Schema.Literal(
      'DevTools',
      'Dashboard',
      'Data Inspector',
      'Network Inspector',
    )
      .pipe(orString, Schema.Array)
      .annotations({
        description: 'Tools provided for developers.',
      }),
  ).pipe(Schema.optional),
  CLI: DataWithComment(
    Schema.String.annotations({
      description: 'Command line interface tools for developers.',
    }),
  ).pipe(Schema.optional),
  TypeSupport: DataWithComment(
    Schema.String.annotations({
      description: 'Type support.',
    }),
  ).pipe(Schema.optional),
}).annotations({ title: 'DevelopmentWorkflowsDX' })

export const Logo = Schema.Struct({
  Light: Schema.String.pipe(Schema.optional),
  Dark: Schema.String.pipe(Schema.optional),
}).annotations({ title: 'Logo' })

const UrlString = Schema.String.pipe(
  Schema.filter(
    (url) => {
      try {
        new URL(url)
        return true
      } catch (error) {
        return false
      }
    },
    {
      title: 'UrlString',
      description: 'A valid URL string.',
      jsonSchema: { type: 'string', format: 'uri' },
    },
  ),
)

export const schemaVersion = 1

export const LandscapeSchema = Schema.Struct({
  Version: Schema.Literal(schemaVersion).annotations({
    description: 'The version of the schema.',
  }),
  Id: Schema.String.annotations({
    description: 'The unique identifier of the technology or product.',
  }),
  Name: Schema.String.annotations({
    description: 'The name of the technology or product.',
  }),
  Description: Schema.String.annotations({
    description: 'A brief description of the technology or product.',
  }).pipe(Schema.optional),
  MaturityLevel: Schema.Literal('Experimental', 'Beta', 'Production-Ready')
    .pipe(orString)
    .annotations({
      description: 'The maturity level of the technology or product.',
    })
    .pipe(Schema.optional),
  Logo: Logo.pipe(Schema.optional),
  Website: UrlString.annotations({
    description: 'The website of the technology or product.',
  }).pipe(Schema.optional),
  GitHub: UrlString.annotations({
    description: 'The GitHub repository URL of the technology or product.',
  }).pipe(Schema.optional),
  GetStarted: UrlString.annotations({
    description: 'Link to get started with the technology or product.',
  }).pipe(Schema.optional),
  UniquenessNote: Schema.String.annotations({
    description:
      'What the technology creator(s) think is unique about the technology.',
  }).pipe(Schema.optional),
  InitialReleaseDate: Schema.Date.annotations({
    description: 'The initial release date of the technology or product.',
  }).pipe(Schema.optional),
  NotableAdopters: Schema.Struct({
    Name: Schema.String.annotations({
      description:
        'The name of the company or project that uses the technology.',
    }),
    URL: UrlString.annotations({}),
  })
    .pipe(Schema.Array)
    .annotations({
      description: 'Notable adopters of the technology or product.',
    })
    .pipe(Schema.optional),
  Deployment: Schema.Literal('Self-hosted', 'Hosted')
    .pipe(orString, Schema.Array, Schema.optional)
    .annotations({
      description: 'The deployment options for the technology or product.',
    }),
  License: Schema.Literal(
    'Proprietary',
    'MIT',
    'GPL',
    'Apache',
    'FSL-Apach 2.0',
  )
    .pipe(orString, Schema.optional)
    .annotations({
      description: 'The license of the technology or product.',
    }),
  Score: Score.pipe(Schema.optional),
  AppTarget: AppTarget.pipe(Schema.optional),
  Networking: Networking.pipe(Schema.optional),
  ServerSideData: ServerSideData.pipe(Schema.optional),
  ClientSideData: ClientSideData.pipe(Schema.optional),
  SynchronizationStrategy: SynchronizationStrategy.pipe(Schema.optional),
  AuthIdentity: AuthIdentity.pipe(Schema.optional),
  UIRelated: UIRelated.pipe(Schema.optional),
  DevelopmentWorkflowsDX: DevelopmentWorkflowsDX.pipe(Schema.optional),
  /** This data is generated. Please do not provide this data, as it will be overwritten. */
  __generated: Schema.Struct({
    lastUpdated: Schema.Date.annotations({
      description: 'The last time the data was updated.',
    }),
  }).pipe(Schema.optional),
}).annotations({ title: 'Root' })

export type Landscape = typeof LandscapeSchema.Type

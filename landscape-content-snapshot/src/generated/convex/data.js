// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
	Version: 1,
	Id: 'convex',
	Name: 'Convex',
	Description: 'Convex is the open source, reactive database where queries are TypeScript code running right in the database. Just like React components react to state changes, Convex queries react to database changes.',
	Website: 'https://convex.dev',
	Deployment: ['Self-hosted', 'Hosted'],
	GitHub: 'https://github.com/get-convex/convex-backend',
	GetStarted: 'https://docs.convex.dev/tutorial/',
	Logo: {
		Light: 'https://static.convex.dev/logo/convex-logo.svg',
		Dark: 'https://static.convex.dev/logo/convex-logo-light.svg',
	},
	License: 'FSL-1.1-Apache-2.0',
	MaturityLevel: "Production-Ready",
	AppTarget: {
		LanguageSDK: { data: ['TypeScript', 'JavaScript', 'Kotlin', 'Python', 'Rust', 'Swift'] },
		ClientBundleSize: { data: '~120KiB'},
		Platform: {
			data: ['Browser', 'Node', 'iOS', 'Android', 'macOS', 'Linux'],
		},
		FrameworkIntegrations: {
			data: ['Next.js', 'Tanstack Start', 'React', 'React Native', 'Svelte', 'SwiftUI', 'Vue', 'Flutter']
		}
	},
	Networking: {
		Topology: { data: 'Client-Server' },
		Protocol: {
			data: ['WebSockets', 'HTTP'],
		}
	},
	ServerSideData: {
		PersistenceMechanism: { data: ['Custom', 'MySQL', 'PostgreSQL', 'SQLite'] },
		DataModelParadigm: { data: 'Relational' },
		SchemaManagement: { data: ['Schema definition', 'Validate schemas on write'] },
	},
	ClientSideData: {
		QueryAPI: { data: ['Reactive queries', 'Async'] },
		LocalRefreshLatency: { data: "~10-100ms" },
		PersistenceMechanism: { data: [] },
		PersistenceFeatures: { data: 'Transactions' },
		DataModel: { data: 'Relational' },
		DataSize: { data: 'Up to 1 MB per document' },
	},
	SynchronizationStrategy: {
		FullOrPartialReplication: { data: ['Partial Replication'] },
		ConflictHandling: { data: 'Custom conflict resolution supported' },
		WhereResolutionOccurs: { data: 'Server' },
		WhatGetsSynced: {
			data: {
				ClientToServer: 'Mutations',
				ServerToClient: 'Query functions',
			},
		},
		Authority: { data: 'Centralized' },
		Latency: { data: '~100ms' },
		Throughput: { data: '10000 writes/sec' },
		Concurrency: { data: '1M concurrent users' },
	},
	AuthIdentity: {
		Encryption: { data: 'Yes', comment: "All data is encrypted at rest for the hosted product" },
		AuthenticationMethod: { data: ['Built-in', 'JWT Tokens']},
		AuthorizationPermissions: { data: 'Custom' },
	},
	UIRelated: {
		RichTextEditing: { data: 'Yes', comment: 'https://www.convex.dev/components/prosemirror-sync' },
	},
	DevelopmentWorkflowsDX: {
		DebuggingTools: { data: ['Dashboard']},
		CLI: { data: 'Yes'},
		TypeSupport: { data: 'Yes', comment: "End to-end type safety from the schema to functions to the client" },
	},
})

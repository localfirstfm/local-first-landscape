// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
	Version: 1,
	Id: 'livestore',
	Name: 'LiveStore',
	Description: 'Client-centric local-first data layer for high-performance apps',
	Website: 'https://livestore.dev',
	Deployment: ['Self-hosted'],
	License: 'MIT',
	AppTarget: {
		LanguageSDK: { data: ['typescript'] },
	},
	Networking: {
		Topology: { data: 'Client-Server' },
	},
	ServerSideData: {
		PersistenceMechanism: { data: ['N/A'] },
		DataModelParadigm: { data: 'Relational' },
	},
	ClientSideData: {
		QueryAPI: { data: ['Async'] },
		PersistenceMechanism: { data: ['IndexedDB', 'OPFS'] },
		PersistenceFeatures: { data: 'Indexes' },
		DataModel: { data: 'Document' },
		OfflineReads: { data: 'Full Support' },
		OfflineWrites: { data: 'Local conflict resolution' },
		DataSize: { data: 'Up to 5-10 MB per document' },
	},
	SynchronizationStrategy: {
		FullOrPartialReplication: { data: ['Full Replication'] },
		ConflictHandling: { data: 'Automatic via CRDT' },
		WhereResolutionOccurs: { data: 'Client' },
		WhatGetsSynced: {
			data: {
				ClientToClient: 'Ops',
			},
		},
	},
})

# RxDB (Reactive Database)

RxDB is a [local-first](https://rxdb.info/articles/local-first-future.md), [NoSQL-database](https://rxdb.info/articles/json-database.md) for JavaScript Applications. It allows you to build **[Offline-First](https://rxdb.info/offline-first.md)** applications that feel real-time and responsive.

## Core Features

- **Local-First & Offline-First**  
  RxDB stores your data locally on the client device ([Browser](https://rxdb.info/articles/browser-database.md), [React-Native](https://rxdb.info/react-native-database.md), [Electron](https://rxdb.info/electron-database.md), [Node.js](https://rxdb.info/nodejs-database.md)). This ensures your application loads instantly and works even when there is no internet connection.

- **[Real-Time Replication](https://rxdb.info/replication.md)**  
  RxDB replicates data between your clients and your backend. It supports various replication protocols including [GraphQL](https://rxdb.info/replication-graphql.md), [CouchDB](https://rxdb.info/replication-couchdb.md), and [REST](https://rxdb.info/replication-http.md). You can also build custom replication plugins.

- **[Reactive Queries](https://rxdb.info/rx-query.md)**  
  RxDB is built on the concept of Reactive Connectors. You can subscribe to query results, and your UI will automatically update whenever the data changes—whether that change comes from a local write or a replication event.

- **Cross-Tab Synchronization**  
  RxDB automatically syncs data between browser tabs or windows. If a user modifies data in one tab, the other tabs update instantly without a page reload.

- **Schema Validation & Migration**  
  Data is validated against a [JSON-Schema](https://rxdb.info/rx-schema.md) before it is written to the database. RxDB also handles [schema migrations](https://rxdb.info/migration-schema.md) locally when you update your data structure.

- **[Encryption](https://rxdb.info/encryption.md)**  
  Unlocking premium security, RxDB allows you to encrypt individual fields or entire documents on the client side, ensuring user data remains private even if the local storage is accessed.

- **Modular & Extensible**  
  RxDB is [plugin-based](https://rxdb.info/plugins.md). You only bundle the modules you need, keeping your build size small. It supports multiple underlying storage engines like [IndexedDB](https://rxdb.info/rx-storage-indexeddb.md), [SQLite](https://rxdb.info/rx-storage-sqlite.md), [In-Memory](https://rxdb.info/rx-storage-memory.md), and more.

## Where It Shines

RxDB is ideal for applications where **user experience** and **data reliability** are paramount. It shines in:
- **[Progressive Web Apps (PWAs)](https://rxdb.info/articles/progressive-web-app-database.md)** that need to work offline.
- **Collaborative applications** requiring real-time updates across multiple users or devices.
- **Complex frontend apps** that need to manage significant amounts of local state and data logic.

## Resources

- **Documentation**: [https://rxdb.info/](https://rxdb.info/)
- **GitHub Repository**: [https://github.com/pubkey/rxdb](https://github.com/pubkey/rxdb)
- **Quickstart Guide**: [https://rxdb.info/quickstart.html](https://rxdb.info/quickstart.html)
- **Community Chat**: [https://rxdb.info/chat](https://rxdb.info/chat)

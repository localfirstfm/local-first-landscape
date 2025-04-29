# LiveStore

LiveStore is a TypeScript library that provides a unique approach to building data-intensive, **local-first** applications for the Web and mobile (Expo). It combines the architectural benefits of **Event Sourcing** with the power and familiarity of **SQLite**, enhanced by a **signals-based reactivity system**.

-  **Event-Driven:** Instead of direct state mutation, all changes are captured as immutable, ordered **events**. This event log forms the definitive history of state transitions and is the single source of truth. This enables **undo/redo** functionality, **auditability**, and **easier schema migrations**.
-  **Pluggable Synchronization:** The **event log** is the unit of synchronization between clients and the backend. The log is synchronized using a push/pull mechanism with client-side rebasing (similar to Git). LiveStore is agnostic to what syncing provider you use and can work with any backend as long as it can persist an event log.
-  **Reactive SQLite**: LiveStore processes the event log to materialize the application's state into a local and reactive SQLite database. This database runs **in-memory** to allow for **instant and synchronous queries** directly within your components without `isLoading` states. The database is also **persisted** in the browser and can be used even when offline.
- **Developer Tools**: Includes powerful Devtools for inspecting the real-time state database, browsing the event log, analyzing query performance, visualizing the reactivity graph, monitoring sync status, and executing direct SQLite queries. *(Note: Devtools access may be sponsor-only post-launch)*
- **Open Source & Independent:** Available under an open source license and developed independently, focusing on sustainable development aligned with user needs.

## Resources

- [Website](https://livestore.dev)
- [Documentation](https://livestore.dev/docs/)
- [GitHub](https://github.com/livestorejs/livestore)
- [Examples](https://github.com/livestorejs/livestore/tree/main/examples/standalone)
- [Discord (link needed)](https://discord.gg/RbMcjUAPd7)

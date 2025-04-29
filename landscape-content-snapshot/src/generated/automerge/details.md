# Automerge

[Get Started](https://automerge.org/docs/quickstart/)

---

Automerge is a toolkit which makes building collaborative, local first applications which don't depend on servers feel as easy as building local only prototypes. We do this by thinking of the problem of local first collaboration as a version control problem - every peer has a different version of the data and Automerge provides tools to easily synchronise different versions, examine, history, and merge changes.

This gives us a number of benefits:

### Network Topology Agnosticism

Every peer is the same, there is no special server/client relationship. This means that you can use a sync server - just a very available peer - and opportunistically use peer to peer connections when available. It also means that sync servers are fungible, you can run one, your users can run one, etc.

### Local first

You always have a full local copy of the data, and local reads and writes are always committed instantly. If your sync server is unavailable, that's fine, you'll merge when you reconnect - or even just when you connect to a _different_ sync server.

### Rich change history

Automerge tracks very fine grained (typically per keystroke) and rich (native representations for maps, lists, and rich text) changes. This allows us to avoid most conflicts, and provide good APIs for conflict resolution. It also means that you can always examine any part of the history of the document to review changes.

### Unified collaboration model

Because of the rich change history Automerge tracks, the programming model for synchronous real-time collaboration, and asynchronous "I was working from a cabin in the woods for a week" collaboration is the same.

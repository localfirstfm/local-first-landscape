Loro is a [CRDTs(Conflict-free Replicated Data Types)](https://crdt.tech/) library that makes building [local-first](https://www.inkandswitch.com/essay/local-first/) and collaborative apps easier. You can now use it in [Rust](https://crates.io/crates/loro), [JS](https://www.npmjs.com/package/loro-crdt) (via WASM), [Swift](https://swiftpackageindex.com/loro-dev/loro-swift) and [Python](https://pypi.org/project/loro/).

## Features

**Features Provided by CRDTs**

- P2P Synchronization
- Automatic Merging
- Local Availability
- Scalability
- Delta Updates

**Supported CRDT Algorithms**

- 📝 Text Editing with [Fugue](https://arxiv.org/abs/2305.00583)
- 📙 [Rich Text CRDT](https://loro.dev/blog/loro-richtext)
- 🌲 [Moveable Tree](https://loro.dev/docs/tutorial/tree)
- 🚗 [Moveable List](https://loro.dev/docs/tutorial/list)
- 🗺️ [Last-Write-Wins Map](https://loro.dev/docs/tutorial/map)

**Advanced Features in Loro**

- 🚀 [Fast Document Loading](https://loro.dev/blog/v1.0)
- ⏱️ Fast [Time Travel](https://loro.dev/docs/tutorial/time_travel) Through History
- 🏛️ [Version Control with Real-Time Collaboration](https://loro.dev/blog/v1.0#version-control)
- 📦 [Shallow Snapshot](https://loro.dev/docs/advanced/shallow_snapshot) that Works like Git Shallow Clone

## Example

```ts
import { expect, test } from "vitest";
import { LoroDoc, LoroList } from "loro-crdt";

test("sync example", () => {
  // Sync two docs with two rounds of exchanges

  // Initialize document A
  const docA = new LoroDoc();
  const listA: LoroList = docA.getList("list");
  listA.insert(0, "A");
  listA.insert(1, "B");
  listA.insert(2, "C");

  // Export all updates from docA
  const bytes: Uint8Array = docA.export({ mode: "update" });

  // Simulate sending `bytes` across the network to another peer, B

  const docB = new LoroDoc();
  // Peer B imports the updates from A
  docB.import(bytes);

  // B's state matches A's state
  expect(docB.toJSON()).toStrictEqual({
    list: ["A", "B", "C"],
  });

  // Get the current version of docB
  const version = docB.oplogVersion();

  // Simulate editing at B: delete item 'B'
  const listB: LoroList = docB.getList("list");
  listB.delete(1, 1);

  // Export the updates from B since the last sync point
  const bytesB: Uint8Array = docB.export({ mode: "update", from: version });

  // Simulate sending `bytesB` back across the network to A

  // A imports the updates from B
  docA.import(bytesB);

  // A has the same state as B
  expect(docA.toJSON()).toStrictEqual({
    list: ["A", "C"],
  });
});
```

## DevTools

### Loro Inspector

You can use the [Loro Inspector](https://inspector.loro.dev) to inspect the state and history of a Loro document.
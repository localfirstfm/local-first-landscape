# TinyBase

A <em>reactive</emdata store <span>& <em>sync</emengine</span>.

<a class='start' href='/guides/the-basics/getting-started/'>Get started</a>

<a href='/demos/'>Try the demos</a>

<a href='/api/store/interfaces/store/store/'>Read the docs</a>

---

## It's _Reactive_

TinyBase lets you listen to changes made to any part of your data. This means
your app will be fast, since you only spend rendering cycles on things that
change. The optional bindings to React and pre-built components let you easily
build fully reactive UIs on top of TinyBase. You even get a built-in undo
stack, and developer tools!

## It's _Database-Like_

Consumer app? Enterprise app? Or even a game? Model key-value data and tabular
data with optional typed schematization, whatever its data structures. There
are built-in indexing, metric aggregation, and tabular relationships APIs -
and a powerful query engine to select, join, filter, and group data
(reactively!) without SQL.

## It _Synchronizes_

TinyBase has native CRDT support, meaning that you can deterministically
synchronize and merge data across multiple sources, clients, and servers. And
although TinyBase is an in-memory data store, you can easily persist your data
to file, browser storage /persister-browser, IndexedDB, SQLite or PostgreSQL
databases, and more.

## It's Built For A _Local-First_ World

TinyBase works anywhere that JavaScript does, but it's especially great for
local-first apps: where data is stored locally on the user's device and that
can be run offline. It's tiny by name, tiny by nature: just 5.3kB - 11.5kB and
with no dependencies - yet 100% tested, fully documented, and of course, open
source!

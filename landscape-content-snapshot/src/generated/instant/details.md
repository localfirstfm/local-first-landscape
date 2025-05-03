# Insant

Instant is a modern Firebase. We make you productive by giving your frontend a real-time database.

You write [relational queries](https://www.instantdb.com/docs/instaql) in the shape of the data you want and Instant handles all the data fetching, permission checking, and offline caching. When you [change data](https://www.instantdb.com/docs/instaml), optimistic updates and rollbacks are handled for you as well. Plus, every query is multiplayer by default.

We also support [ephemeral](https://www.instantdb.com/docs/presence-and-topics) updates, like cursors, or who's online. Currently we have SDKs for [Javascript](https://www.instantdb.com/docs/start-vanilla), [React](https://www.instantdb.com/docs/), and [React Native](https://www.instantdb.com/docs/start-rn).

How does it look? Here's a barebones chat app in about 12 lines:

```javascript
// ༼ つ ◕_◕ ༽つ Real-time Chat
// ----------------------------------
// * Updates instantly
// * Multiplayer
// * Works offline

import { init, tx, id } from "@instantdb/react";

const db = init({ 
  appId: process.env.NEXT_PUBLIC_APP_ID,
});

function Chat() {
  // 1. Read
  const { isLoading, error, data } = db.useQuery({
    messages: {},
  });

  // 2. Write
  const addMessage = (message) => {
    db.transact(tx.messages[id()].update(message));
  };

  // 3. Render!
  return <UI data={data} onAdd={addMessage} />;
}
```

Want to see for yourself? <a href="https://instantdb.com/tutorial">try a demo in your browser.</a>

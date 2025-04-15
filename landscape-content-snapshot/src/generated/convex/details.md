# Convex

[Convex](https://convex.dev) is the open-source reactive database designed to
make life easy for web app developers, whether human or LLM. Fetch data and
perform business logic with strong consistency by writing pure TypeScript.

Convex provides a database, a place to write your server functions, and client
libraries. It makes it easy to build and scale dynamic live-updating apps.
[Read the docs to learn more](https://docs.convex.dev/understanding/).

## Features

- **Functions**: Functions run on the backend and are written in JavaScript (or TypeScript). They are automatically available as APIs accessed through client libraries. Queries read data from the Convex database and are automatically cached and reactive. Mutations transactionally write to the database. Actions call external APIs.
- **Database**: The Convex database provides a relational data model, stores JSON-like documents, and can be used with or without a schema. It "just works," giving you predictable query performance in an easy-to-use interface.
- **Authentication**: Convex has built-in authentication and also supports integrating with any other OpenID Connect authentication provider.
- **Scheduling**: Run a function one or repeatedly in the feature, composing Convex functions into durable workflows.
- **File Storage**: Store and retrieve files of all file types in built-in file storage.
- **Search**: Add text or vector indexes to search over data in your Convex database.
- **Dashboard**: View your Convex deployment's data, functions, and logs in our built-in dashboard.
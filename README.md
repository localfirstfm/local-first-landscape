# Local-first Landscape 🗺️

A resource to learn about and compare tools in the local-first landscape. Whether you're a developer looking to experiment with local-first patterns or a technical leader making a strategic technology decision, this resource helps you navigate the growing ecosystem of local-first tools and make informed choices.

## Sub-packages

This monorepo contains several packages that work together:

-   `landscape-schema`: Defines the TypeScript schema for the data that describes each technology in the landscape.
-   `landscape-fetch-content`: Contains the infrastructure to fetch the data for each technology from its designated GitHub repository (see below).
-   `landscape-content-snapshot`: A local cache of the fetched data from the technology repositories.

## Contributing Data

The data for this landscape is maintained collaboratively.

### Suggesting a New Technology

To suggest adding a new technology to the landscape, please open a Pull Request against the `packages/@localfirstfm/landscape-fetch-content/src/repos.ts` file in *this* repository. Add an entry for the new technology, specifying its unique ID, the GitHub owner and repository where its data will be maintained, and optionally a branch and base path within that repository.

### Editing Existing Technology Data

To edit the information for an existing technology, you need to open a Pull Request against the specific GitHub repository where that technology's data is managed. Find the correct repository in the table below:

| Technology                                                                              | Data Repository                                                                 |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [Automerge](placeholder-homepage-automerge)                                             | [`automerge/local-first-landscape-data`](https://github.com/automerge/local-first-landscape-data)         |
| [Basic](placeholder-homepage-basic)                                                     | [`basicdb/local-first-landscape-data`](https://github.com/basicdb/local-first-landscape-data)           |
| [Convex](placeholder-homepage-convex)                                                   | [`get-convex/localfirst-landscape-data`](https://github.com/get-convex/localfirst-landscape-data)     |
| [Ditto](placeholder-homepage-ditto)                                                     | [`localfirstfm/local-first-landscape`](https://github.com/localfirstfm/local-first-landscape)         |
| [DXOS](placeholder-homepage-dxos)                                                       | [`dxos/local-first-landscape-data`](https://github.com/dxos/local-first-landscape-data)               |
| [ElectricSQL](placeholder-homepage-electricsql)                                         | [`electric-sql/local-first-landscape-data`](https://github.com/electric-sql/local-first-landscape-data) |
| [Jazz](placeholder-homepage-jazz)                                                       | [`garden-co/jazz-lofi-landscape`](https://github.com/garden-co/jazz-lofi-landscape)               |
| [Liveblocks](placeholder-homepage-liveblocks)                                           | [`liveblocks/local-first-landscape-data`](https://github.com/liveblocks/local-first-landscape-data)     |
| [LiveStore](placeholder-homepage-livestore)                                             | [`livestorejs/local-first-landscape`](https://github.com/livestorejs/local-first-landscape)           |
| [NextGraph](https://nextgraph.org)                                                      | [`nextgraph-org/landscape-data`](https://github.com/nextgraph-org/landscape-data)           |
| [PowerSync](placeholder-homepage-powersync)                                             | [`powersync-ja/local-first-landscape-data`](https://github.com/powersync-ja/local-first-landscape-data) |
| [TinyBase](placeholder-homepage-tinybase)                                               | [`tinyplex/tinybase-landscape-data`](https://github.com/tinyplex/tinybase-landscape-data)           |
| [Triplit](placeholder-homepage-triplit)                                                 | [`aspen-cloud/local-first-landscape-data`](https://github.com/aspen-cloud/local-first-landscape-data) |
| [Y-Sweet](placeholder-homepage-y-sweet)                                                 | [`jamsocket/y-sweet`](https://github.com/jamsocket/y-sweet)                                           |
| [Yjs](placeholder-homepage-yjs)                                                         | [`yjs/local-first-landscape-data`](https://github.com/yjs/local-first-landscape-data)                     |
| [Zero](placeholder-homepage-zero)                                                       | [`rocicorp/local-first-landscape-data`](https://github.com/rocicorp/local-first-landscape-data)         |
| [Instant](https://instantdb.com)                                                        | [`instantdb/local-first-landscape-data`](https://github.com/instantdb/local-first-landscape-data)         |
| [PouchDB](https://pouchdb.com/)                                                        | [`neighbourhoodie/pouchdb-landscape-data`](https://github.com/neighbourhoodie/pouchdb-landscape-data)         |
| [CouchDB](https://couchdb.apache.org/)                                                        | [`neighbourhoodie/couchdb-landscape-data`](https://github.com/neighbourhoodie/couch-landscape-data)         |

Make your changes to the relevant files in that repository.

> [!NOTE]
> The content for each technology is automatically pulled from its respective repository and regenerated **daily at 00:00 UTC**. Changes made in the source repositories will only be reflected in the website after the next daily update.


# Basic

**Basic** is building infrastructure for personalized, multiplayer, local-first apps where users own their data.

We set out to build a complete solution for local-first apps — and realized that a sync engine alone doesn’t solve the problem of user-owned data. That led us to create **personal data stores**: an independent, portable database owned and controlled by the *user*, not the app.

## Personal Data Stores

Most apps today are built on a simple assumption: data lives on the app’s servers. Users generate it, and apps store all the data from all their users in a single, centralized database. This model has caused many of the web’s biggest problems: lock-in, privacy issues, broken interoperability, and walled gardens.

**Basic flips that model.** Instead of one app owning data from many users, each user owns their own data — and apps just plug into it. It’s a small shift with big benefits:

- **User control**: Data lives with the user, not the platform. They can revoke access at any time.
- **Interoperability**: Apps don’t need to manually integrate with each other — it’s built in. This unlocks deeply personalized experiences and a “universal shared memory” across apps.
- **Portability**: Users can switch tools without losing their data or starting over.
- **Simpler apps**: Developers don’t need to build auth, sync, or complex backends — just good apps.

## Building on Basic

**Basic** is a complete framework for building local-first apps. It includes auth, database, sync, and client SDKs.

- **Auth**: Users authenticate with their own PDS. Basic makes this seamless by providing a default PDS for each user, enabling quick onboarding.
- **Database & Schema**: Apps define a schema — a simple, declarative way to describe your data. You define your tables and fields; Basic handles the rest. This abstraction makes syncing across devices easy, without worrying about migrations or conflicts.
- **Sync**: Basic comes with a built-in sync engine, fully integrated with the React SDK. We're working on support for more clients (like React Native) and even compatibility with other sync engines.

## Getting Started

- [Check out the docs](https://docs.basic.tech) to learn more.
- [Read more about personal data stores](https://docs.basic.tech/readings/user-owned-data-stores).
- [Join our Discord](https://discord.gg/M57gcazvYk) to chat with the team or ask questions.
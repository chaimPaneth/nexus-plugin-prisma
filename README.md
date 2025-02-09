<p align="center">
  <img src="https://i.imgur.com/8qvElTM.png" width="300" align="center" />
  <h1 align="center">@kenchi/nexus-plugin-prisma</h1>
</p>

![trunk](https://github.com/kenchi/nexus-plugin-prisma/workflows/trunk/badge.svg)

**Note:** A [replacement](https://github.com/prisma/nexus-prisma/) for this library is under development and available in early preview. More details in [#1039](https://github.com/graphql-nexus/nexus-plugin-prisma/issues/1039). Since the Prisma team is no longer keeping this library up to date with new Prisma versions, we have forked it.

This plugin integrates [Prisma](https://www.prisma.io/) into [Nexus](https://nexusjs.org/). It gives you an API you to project fields from models defined in your Prisma schema into your GraphQL API. It also gives you an API to build GraphQL root fields that allow your API clients to query and mutate data.

You can find the [documentation on the Nexus website](https://nexusjs.org/docs/plugins/prisma/overview).

## Installation

```
npm install @kenchi/nexus-plugin-prisma
# OR
yarn add @kenchi/nexus-plugin-prisma
```

## Description
Basic nestjs + neo4j + graphql implementation using Machines, Sweets & Orders.

## Installation & Running the app

```bash
$ cp .env.example .env
$ docker-compose up
```
You can find scripts to populate & execute the requested requests in ./queries/
You can use the landing page in localhost:5000/graphql (assuming you are using the same .env values) to build & execute queries.
Neo4j database can be accessed through localhost:7474/browser

## Structure
The GraphQLModule in app.module.ts is initialized using the gqlProviderFactory, which will contain all the connection & schema information gathered throughout the repository. @neo4j/graphql will then automatically generate behind the scenes capabilities for CRUD, filtering and much more.
Each part of the schema is in its own folder for clarity and better organization when adding business logic.
schema/graphql.ts contains auto-generated (through `npm run generate-typings`) classes and definitons of the schema to avoid repetition and allow typings in the modules.

## Journey
As I mentionned in the interview, my experience with graphql & nestjs is limited (and never those two at the same time). It was initially a challenge to find the correct ressource & way to implement and use both of those technologies. Still, I decided to use that stack for this test first as a challenge and as an opportunity to learn it.

I initially implemented resources and CRUD manually, shying away from @neo4j/graphql (mainly due to the way of defining the schema, everything in one file), which led to v0.1 of this repo using cypher-query-builder, using a code structure similar to https://github.com/k-code-yt/nestjs-gql-neo4j/tree/lesson-2/dockerize  
https://github.com/EnigmaDoor/pynea/tree/e044083b7f1c09ee0d7a50ddea6ffbc3e7d89268

However, I found a way to piece together the schema definition of @neo4j/graphql with split graphql schemas, and progressively switched the app to fully use the library's functionalities, removing most of my previous code.
https://github.com/EnigmaDoor/pynea/tree/bb3410c23b7aa4d9ccc9af2318689b2b8d97d6d6

Once the codebase was fully functional, with the resourcs and queries requested in the prompt, I cleaned it up and then attempted to build a custom resolver as extra and see how it would work, which isn't yet finished due to time constraint and a slight mismatch between nestjs/graphql and Neo4j/graphql

## Possible Improvements
In random order, some possible improvements or interesting features to implement:
- Some machine module & resolver to add some random business logic and see how it plays with the current architecture. [Ongoing]
- Testing: Implement testing.
- Authentication: User entity type (order.customer becomes a relation to user). Add regular JWT authto the user, not done here since it's already done a lot online.
- Random, real-time order generation script running against the server, populating data for a system of prediction of incoming orders based on the received orders until now.

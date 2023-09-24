## Description
Basic nestjs + neo4j + graphql implementation using Machines, Sweets & Orders.

## Installation & Running the app

```bash
$ cp .env.example .env
$ docker-compose up
```
You can find scripts to populate & execute the requested requests in ./queries/

## Journey
As I mentionned in the interview, my experience with graphql & nestjs is limited (and never those two at the same time). It was initially a challenge to find the correct ressource & way to implement and use both of those technologies. Still, I decided to use that stack for this test first as a challenge and as an opportunity to learn it.

I initially implemented resources and CRUD manually, shying away from @neo4j/graphql (mainly due to the way of defining the schema, everything in one file), which led to v0.1 of this repo using cypher-query-builder, using a code structure similar to https://github.com/k-code-yt/nestjs-gql-neo4j/tree/lesson-2/dockerize

However, I found a way to "hack" the schema definition of @neo4j/graphql with split graphql schemas, and progressively switched the app to fully use the library's functionalities, removing most of my previous code.

## Possible Improvements
In random order, some possible improvements or interesting features to implement:
- Testing: Implement testing.
- Authentication: User entity type (order.customer becomes a relation to user). Add regular JWT authto the user, not done here since it's already done a lot online.
- Random, real-time order generation script running against the server, populating data for a system of prediction of incoming orders based on the received orders until now.

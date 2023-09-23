## Description

Nest + Neo4j + Graphql schema-first repository
Thanks to [k]code https://www.youtube.com/watch?v=kEoSJTbONNI
https://github.com/k-code-yt/nestjs-gql-neo4j

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ docker-compose up
```

## Possible Improvements
In random order, some possible improvements or interesting features to implement:
- Testing: Implement testing.
- Constraining the database: Automatically constraint the database using the schema, which seems possible at first glance using Neo4j driver and ours schemas.
- Authentication: User entity type (order.customerName becomes a relation to user). Add regular JWT authto the user, not done here since it's already done a lot online.
- A module for each relation for better scalability & separation of concerns. Here I added the relation in the outgoing node module as it wasn't necessary otherwise.
- Random, real-time order generation script running against the server, populating data for a system of prediction of incoming orders based on the received orders until now.

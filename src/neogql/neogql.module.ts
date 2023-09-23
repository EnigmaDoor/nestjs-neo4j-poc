import { Module } from '@nestjs/common';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { neogqlProviderFactory } from './neogql.provider-factory';
import { Neo4jModule } from 'nest-neo4j';
import { join } from 'path';


@Module({
    imports: [
        Neo4jModule.forRoot({
            scheme: 'neo4j',
            host: 'localhost',
            port: '7687',
            username: 'neo4j',
            password: 'password',
        }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
        // useFactory: neogqlProviderFactory,
        // playground: true,
        // typePaths: ['./**/*.graphql.schema'],
        // definitions: {
        //     path: join(process.cwd(), 'src/graphql.ts'),
        //     outputAs: 'class',
        // },
    }),
  ],
})
export class NeogqlModule {}

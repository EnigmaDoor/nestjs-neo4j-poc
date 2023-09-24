import neo4j from 'neo4j-driver';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { GraphQLTypesLoader } from '@nestjs/graphql/dist/graphql-types.loader';
import { DynamicModule, Module } from '@nestjs/common';
import { createDatabaseConfig, ConnectionError, ConnectionWithDriver, NeogqlConfig } from './neogql.utils';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { NEOGQL_CONFIG, NEOGQL_CONNECTION } from './neogql.constants';

export const gqlProviderFactory = async (configService: ConfigService, customConfig?: NeogqlConfig) => {
    const loader = new GraphQLTypesLoader();
    const typeDefs = await loader.mergeTypesByPaths(['./**/*.schema.graphql']);

    const neogqlConfig = await createDatabaseConfig(configService, customConfig);
    const { host, scheme, port, uri, username, password } = neogqlConfig;

    const driver = neo4j.driver(uri, neo4j.auth.basic(username, password));

    const neoSchema = new Neo4jGraphQL({
        typeDefs,
        driver
    });

    const schema = await neoSchema.getSchema();
    await neoSchema.assertIndexesAndConstraints({
        options: { create: true }
    });

    return {
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        playground: false,
        schema,
    };
};

@Module({
    providers: []
})

export class NeogqlModule {}

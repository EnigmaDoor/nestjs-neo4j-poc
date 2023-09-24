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

export const gqlProviderFactory = async (neogqlConfig: NeogqlConfig) => {
    const loader = new GraphQLTypesLoader();
    const typeDefs = await loader.mergeTypesByPaths(['./**/*.schema.graphql']);
    const host = process.env.DB_HOST;
    const scheme = process.env.DB_SCHEME;
    const port = process.env.DB_PORT;
    const username = process.env.DB_USERNAME;
    const password = process.env.DB_PASSWORD;
    // const { host, scheme, port, username, password } = neogqlConfig;
    const uri = `${scheme}://${host}:${port}`;

    const driver = neo4j.driver(uri, neo4j.auth.basic(username, password));

    const neoSchema = new Neo4jGraphQL({
        typeDefs,
        driver
    });

    const schema = await neoSchema.getSchema();
    await neoSchema.assertIndexesAndConstraints({
        options: { create: true }
    });

    console.log("Connecting through", uri, username, password)

    return {
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        playground: false,
        schema,
    };
};

@Module({
    providers: []
})

export class NeogqlModule {
    static async forRootAsync(customConfig?: NeogqlConfig): Promise<DynamicModule> {
    // static forRoot(customConfig?: NeogqlConfig) {
        return {
            module: NeogqlModule,
            global: true,
            // providers: [{
            //     provide: NEOGQL_CONFIG,
            //     inject: [ConfigService],
            //     useFactory: (configService: ConfigService) =>
            //         createDatabaseConfig(configService, customConfig),
            // }, {
            //     provide: NEOGQL_CONNECTION,
            //     inject: [NEOGQL_CONFIG],
            //     useFactory: async (config: NeogqlConfig) => {
            //         const options = await gqlProviderFactory(config);

            //         return GraphQLModule.forRoot<ApolloDriverConfig>({
            //             driver: ApolloDriver,
            //             ...options
            //         });
            //     }
            // }],
            imports: [
                ConfigModule,
                // GraphQLModule.forRootAsync<ApolloDriverConfig>({
                //     driver: ApolloDriver,
                //     useFactory: gq
                // })
            ]
        }
    }
}

import neo4j from 'neo4j-driver';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { join } from 'path';
// import { typeDefs } from '../type-defs';


export const neogqlProviderFactory = async () => {
    const {
        DB_URI,
        DB_USERNAME,
        DB_PASSWORD,
        USE_AUTH
    } = process.env;


    const driver = neo4j.driver(
        DB_URI,
        neo4j.auth.basic(DB_USERNAME, DB_PASSWORD),
    );

    // Define GraphQL schema and provide db driver
    // const neoSchema = new Neo4jGraphQL({
    //     // typeDefs,
    //   driver
    // });

    // const schema = await neoSchema.getSchema();
    // await neoSchema.assertIndexesAndConstraints({
    //   options: { create: true },
    // });

    return {
        playground: true,
        typePaths: ['./**/*.graphql.schema'],
        definitions: {
            path: join(process.cwd(), 'src/graphql.ts'),
            outputAs: 'class',
        },
        context: {
            driver
        }
    };
};

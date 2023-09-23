import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Neo4jModule } from './neo4j/neo4j.module';
import { MachineModule } from './machine/machine.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { SweetModule } from './sweet/sweet.module';
import { MachineProducesSweetsModule } from './machine-produces-sweets/machine-produces-sweets.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            plugins: [ApolloServerPluginLandingPageLocalDefault()],
            typePaths: ['./**/*.graphql'],
            playground: false,
        }),
        Neo4jModule.forRootAsync(),
        MachineModule,
        SweetModule,
        MachineProducesSweetsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

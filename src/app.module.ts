import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { NeogqlModule, gqlProviderFactory } from './neogql/neogql.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        GraphQLModule.forRootAsync<ApolloDriverConfig>({
            imports: [ConfigModule],
            inject: [ConfigService],
            driver: ApolloDriver,
            useFactory: gqlProviderFactory
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

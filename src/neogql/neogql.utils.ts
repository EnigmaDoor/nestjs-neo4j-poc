import { ConfigService } from '@nestjs/config';
import { Connection } from 'cypher-query-builder';
import { Driver } from 'neo4j-driver';

export type Neo4jScheme =
  | 'neo4j'
  | 'neo4j+s'
  | 'neo4j+ssc'
  | 'bolt'
  | 'bolt+s'
  | 'bolt+ssc';

export interface NeogqlConfig {
  scheme: Neo4jScheme;
  host: string;
  port: string | number;
  uri: string;
  username: string;
  password: string;
  database?: string;
}

export type ConnectionWithDriver = Connection & {
  driver: Driver;
};

export const createDatabaseConfig = (
  configService: ConfigService,
  customConfig?: NeogqlConfig,
): NeogqlConfig =>
  customConfig || {
    host: configService.get('DB_HOST'),
    password: configService.get('DB_PASSWORD'),
    port: configService.get('DB_PORT'),
    uri: `${configService.get('DB_SCHEME')}://${configService.get('DB_HOST')}:${configService.get('DB_PORT')}`,
    scheme: configService.get('DB_SCHEME'),
    username: configService.get('DB_USERNAME'),
};

export class ConnectionError extends Error {
  public details: string;
  constructor(oldError: Error) {
    super();
    this.message = 'Connection with Neo4j database was not established';
    this.name = 'Connection Error';
    this.stack = oldError.stack;
    this.details = oldError.message;
  }
}

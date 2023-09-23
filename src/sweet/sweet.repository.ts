import { Injectable } from '@nestjs/common';
import { node } from 'cypher-query-builder';
import { Neo4jRepository } from 'src/neo4j/neo4j.repository';
import { Entities, Sweet, CreateSweetInput, UpdateSweetInput } from 'src/schema/graphql';

@Injectable()
export class SweetRepository {
    constructor(private readonly neo4jRepository: Neo4jRepository) {}

    async create(createSweetInput: CreateSweetInput): Promise<Sweet> {
        console.log(createSweetInput)
        const query = await this.neo4jRepository
            .initQuery()
            .create([node(Entities.Sweet, Entities.Sweet, createSweetInput)])
            .setVariables({ [`${Entities.Sweet}.uuid`]: 'apoc.create.uuid()' })
            .return(Entities.Sweet)
            .run()
        if (query?.length === 1 && query[0]?.[Entities.Sweet].properties) {
            return query[0][Entities.Sweet].properties;
        }
        return null;
    }

    async findAll(): Promise<Sweet[]> {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode(Entities.Sweet, Entities.Sweet)
            .return(Entities.Sweet)
            .run()
        return query.map(el => el[Entities.Sweet].properties);
    }

    async findOne(uuid: string): Promise<Sweet> {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode(Entities.Sweet, Entities.Sweet)
            .where({ [`${Entities.Sweet}.uuid`]: uuid })
            .return(Entities.Sweet)
            .run()
        if (query?.length === 1 && query[0]?.[Entities.Sweet].properties) {
            return query[0][Entities.Sweet].properties;
        }
        return null;
    }

    async update(uuid: string, updateSweetInput: UpdateSweetInput): Promise<Sweet> {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode(Entities.Sweet, Entities.Sweet)
            .where({ [`${Entities.Sweet}.uuid`]: uuid })
            .setValues(
                Object.fromEntries(Object.entries(updateSweetInput).map(
                    ([k, v], _) => [`${Entities.Sweet}.${k}`, v]
                ))
            ).return(Entities.Sweet)
            .run()
        if (query?.length === 1 && query[0]?.[Entities.Sweet].properties) {
            return query[0][Entities.Sweet].properties;
        }
        return null;
    }

    async remove(uuid: string): Promise<boolean> {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode(Entities.Sweet, Entities.Sweet)
            .where({ [`${Entities.Sweet}.uuid`]: uuid })
            .detachDelete(Entities.Sweet)
            .return(Entities.Sweet)
            .run()
        return !!query?.length;
  }
}

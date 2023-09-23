import { Injectable } from '@nestjs/common';
import { node } from 'cypher-query-builder';
import { Neo4jRepository } from 'src/neo4j/neo4j.repository';
import { CreateSweetInput } from './dto/create-sweet.input';
import { UpdateSweetInput } from './dto/update-sweet.input';

@Injectable()
export class SweetService {
    constructor(private readonly neo4jRepository: Neo4jRepository) {}

    async create(createSweetInput: CreateSweetInput) {
        console.log(createSweetInput)
        const query = await this.neo4jRepository
            .initQuery()
            .create([node('sweet', 'Sweet', createSweetInput)])
            .setVariables({ 'sweet.uuid': 'apoc.create.uuid()' })
            .return('sweet')
            .run()
        return null
    }

    async findAll() {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode('sweets', 'Sweet')
            .return('sweets')
            .run()
        return query.map(el => el.sweets.properties);
    }

    async findOne(uuid: string) {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode('sweet', 'Sweet')
            .where({ 'sweet.uuid': uuid })
            .return('sweet')
            .run()
        if (query.length !== 1 || !query[0].sweet) {
            return null;
        }
        return query[0].sweet.properties;
    }

        async update(uuid: string, updateSweetInput: UpdateSweetInput) {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode('sweet', 'Sweet')
            .where({ 'sweet.uuid': uuid })
            .setValues(
                Object.fromEntries(Object.entries(updateSweetInput).map(
                    ([k, v], _) => [`sweet.${k}`, v]
                ))
            ).return('sweet')
            .run()
        if (query.length !== 1 || !query[0].sweet) {
            return null;
        }
        return query[0].sweet.properties;
    }

    async remove(uuid: string) {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode('sweet', 'Sweet')
            .where({ 'sweet.uuid': uuid })
            .delete('sweet')
            .run()
        return null;
  }
}

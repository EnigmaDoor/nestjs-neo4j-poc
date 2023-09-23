import { Injectable } from '@nestjs/common';
import { node } from 'cypher-query-builder';
import { Neo4jRepository } from 'src/neo4j/neo4j.repository';
import { CreateMachineInput } from './dto/create-machine.input';
import { UpdateMachineInput } from './dto/update-machine.input';

@Injectable()
export class MachineService {
    constructor(private readonly neo4jRepository: Neo4jRepository) {}

    async create(createMachineInput: CreateMachineInput) {
        console.log(createMachineInput)
        const query = await this.neo4jRepository
            .initQuery()
            .create([node('machine', 'Machine', createMachineInput)])
            .setVariables({ 'machine.uuid': 'apoc.create.uuid()' })
            .return('machine')
            .run()
        return null
    }

    async findAll() {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode('machines', 'Machine')
            .return('machines')
            .run()
        return query.map(el => el.machines.properties);
    }

    async findOne(uuid: string) {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode('machine', 'Machine')
            .where({ 'machine.uuid': uuid })
            .return('machine')
            .run()
        if (query.length !== 1 || !query[0].machine) {
            return null;
        }
        return query[0].machine.properties;
    }

    async update(uuid: string, updateMachineInput: UpdateMachineInput) {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode('machine', 'Machine')
            .where({ 'machine.uuid': uuid })
            .setValues(
                Object.fromEntries(Object.entries(updateMachineInput).map(
                    ([k, v], _) => [`machine.${k}`, v]
                ))
            ).return('machine')
            .run()
        if (query.length !== 1 || !query[0].machine) {
            return null;
        }
        return query[0].machine.properties;
    }

    async remove(uuid: string) {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode('machine', 'Machine')
            .where({ 'machine.uuid': uuid })
            .delete('machine')
            .run()
        return null;
  }
}

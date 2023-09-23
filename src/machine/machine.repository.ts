import { Injectable } from '@nestjs/common';
import { node } from 'cypher-query-builder';
import { Neo4jRepository } from 'src/neo4j/neo4j.repository';
import { Entities, Machine, CreateMachineInput, UpdateMachineInput } from 'src/schema/graphql';

@Injectable()
export class MachineRepository {
    constructor(private readonly neo4jRepository: Neo4jRepository) {}

    async create(createMachineInput: CreateMachineInput): Promise<Machine> {
        console.log(createMachineInput)
        const query = await this.neo4jRepository
            .initQuery()
            .create([node(Entities.Machine, Entities.Machine, createMachineInput)])
            .setVariables({ [`${Entities.Machine}.uuid`]: 'apoc.create.uuid()' })
            .return(Entities.Machine)
            .run()
        if (query?.length === 1 && query[0]?.[Entities.Machine].properties) {
            return query[0][Entities.Machine].properties;
        }
        return null;
    }

    async findAll(): Promise<Machine[]> {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode(Entities.Machine, Entities.Machine)
            .return(Entities.Machine)
            .run()
        return query.map(el => el[Entities.Machine].properties);
    }

    async findOne(uuid: string): Promise<Machine> {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode(Entities.Machine, Entities.Machine)
            .where({ [`${Entities.Machine}.uuid`]: uuid })
            .return(Entities.Machine)
            .run()
        if (query?.length === 1 && query[0]?.[Entities.Machine].properties) {
            return query[0][Entities.Machine].properties;
        }
        return null;
    }

    async update(uuid: string, updateMachineInput: UpdateMachineInput): Promise<Machine> {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode(Entities.Machine, Entities.Machine)
            .where({ [`${Entities.Machine}.uuid`]: uuid })
            .setValues(
                Object.fromEntries(Object.entries(updateMachineInput).map(
                    ([k, v], _) => [`${Entities.Machine}.${k}`, v]
                ))
            ).return(Entities.Machine)
            .run()
        if (query?.length === 1 && query[0]?.[Entities.Machine].properties) {
            return query[0][Entities.Machine].properties;
        }
        return null;
    }

    async remove(uuid: string): Promise<boolean> {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode(Entities.Machine, Entities.Machine)
            .where({ [`${Entities.Machine}.uuid`]: uuid })
            .detachDelete(Entities.Machine)
            .return(Entities.Machine)
            .run()
        return !!query?.length;
  }
}

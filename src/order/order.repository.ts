import { Injectable } from '@nestjs/common';
import { node } from 'cypher-query-builder';
import { Neo4jRepository } from 'src/neo4j/neo4j.repository';
import { Entities, Order, CreateOrderInput, UpdateOrderInput } from 'src/schema/graphql';

@Injectable()
export class OrderRepository {
    constructor(private readonly neo4jRepository: Neo4jRepository) {}

    async create(createOrderInput: CreateOrderInput): Promise<Order> {
        console.log(createOrderInput)
        const query = await this.neo4jRepository
            .initQuery()
            .create([node(Entities.Order, Entities.Order, createOrderInput)])
            .setVariables({ [`${Entities.Order}.uuid`]: 'apoc.create.uuid()' })
            .return(Entities.Order)
            .run()
        if (query?.length === 1 && query[0]?.[Entities.Order].properties) {
            return query[0][Entities.Order].properties;
        }
        return null;
    }

    async findAll(): Promise<Order[]> {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode(Entities.Order, Entities.Order)
            .return(Entities.Order)
            .run()
        return query.map(el => el[Entities.Order].properties);
    }

    async findOne(uuid: string): Promise<Order> {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode(Entities.Order, Entities.Order)
            .where({ [`${Entities.Order}.uuid`]: uuid })
            .return(Entities.Order)
            .run()
        if (query?.length === 1 && query[0]?.[Entities.Order].properties) {
            return query[0][Entities.Order].properties;
        }
        return null;
    }

    async update(uuid: string, updateOrderInput: UpdateOrderInput): Promise<Order> {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode(Entities.Order, Entities.Order)
            .where({ [`${Entities.Order}.uuid`]: uuid })
            .setValues(
                Object.fromEntries(Object.entries(updateOrderInput).map(
                    ([k, v], _) => [`${Entities.Order}.${k}`, v]
                ))
            ).return(Entities.Order)
            .run()
        if (query?.length === 1 && query[0]?.[Entities.Order].properties) {
            return query[0][Entities.Order].properties;
        }
        return null;
    }

    async remove(uuid: string): Promise<boolean> {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode(Entities.Order, Entities.Order)
            .where({ [`${Entities.Order}.uuid`]: uuid })
            .detachDelete(Entities.Order)
            .run()
        return true;
  }
}

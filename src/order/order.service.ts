import { Injectable } from '@nestjs/common';
import { node } from 'cypher-query-builder';
import { Neo4jRepository } from 'src/neo4j/neo4j.repository';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';

@Injectable()
export class OrderService {
    constructor(private readonly neo4jRepository: Neo4jRepository) {}

    async create(createOrderInput: CreateOrderInput) {
        console.log(createOrderInput)
        const query = await this.neo4jRepository
            .initQuery()
            .create([node('order', 'Order', createOrderInput)])
            .setVariables({ 'order.uuid': 'apoc.create.uuid()' })
            .return('order')
            .run()
        return null
    }

    async findAll() {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode('orders', 'Order')
            .return('orders')
            .run()
        return query.map(el => el.orders.properties);
    }

    async findOne(uuid: string) {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode('order', 'Order')
            .where({ 'order.uuid': uuid })
            .return('order')
            .run()
        if (query.length !== 1 || !query[0].order) {
            return null;
        }
        return query[0].order.properties;
    }

        async update(uuid: string, updateOrderInput: UpdateOrderInput) {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode('order', 'Order')
            .where({ 'order.uuid': uuid })
            .setValues(
                Object.fromEntries(Object.entries(updateOrderInput).map(
                    ([k, v], _) => [`order.${k}`, v]
                ))
            ).return('order')
            .run()
        if (query.length !== 1 || !query[0].order) {
            return null;
        }
        return query[0].order.properties;
    }

    async remove(uuid: string) {
        const query = await this.neo4jRepository
            .initQuery()
            .matchNode('order', 'Order')
            .where({ 'order.uuid': uuid })
            .delete('order')
            .run()
        return null;
  }
}

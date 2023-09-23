import { Injectable } from '@nestjs/common';
import { Order, CreateOrderInput, UpdateOrderInput } from 'src/schema/graphql';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

    async create(createOrderInput: CreateOrderInput): Promise<Order> {
        return await this.orderRepository.create(createOrderInput);
    }

    async findAll(): Promise<Order[]> {
        return await this.orderRepository.findAll();
    }


    async findOne(uuid: string): Promise<Order> {
        return await this.orderRepository.findOne(uuid);
    }

    async update(uuid: string, updateOrderInput: UpdateOrderInput): Promise<Order> {
        return await this.orderRepository.update(uuid, updateOrderInput);
    }

    async remove(uuid: string): Promise<boolean> {
        return await this.orderRepository.remove(uuid);
    }
}

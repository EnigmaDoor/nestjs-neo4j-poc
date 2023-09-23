import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';

@Resolver('Order')
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation('createOrder')
  create(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
    return this.orderService.create(createOrderInput);
  }

  @Query('orders')
  findAll() {
    return this.orderService.findAll();
  }

  @Query('order')
  findOne(@Args('uuid') uuid: string) {
    return this.orderService.findOne(uuid);
  }

  @Mutation('updateOrder')
  update(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
    return this.orderService.update(updateOrderInput.uuid, updateOrderInput);
  }

  @Mutation('removeOrder')
  remove(@Args('uuid') uuid: string) {
    return this.orderService.remove(uuid);
  }
}

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MachineProducesSweetsService } from './machine-produces-sweets.service';
import { CreateMachineProducesSweetInput } from './dto/create-machine-produces-sweet.input';
import { UpdateMachineProducesSweetInput } from './dto/update-machine-produces-sweet.input';

@Resolver('MachineProducesSweet')
export class MachineProducesSweetsResolver {
  constructor(private readonly machineProducesSweetsService: MachineProducesSweetsService) {}

  @Mutation('createMachineProducesSweet')
  create(@Args('createMachineProducesSweetInput') createMachineProducesSweetInput: CreateMachineProducesSweetInput) {
    return this.machineProducesSweetsService.create(createMachineProducesSweetInput);
  }

  @Query('machineProducesSweets')
  findAll() {
    return this.machineProducesSweetsService.findAll();
  }

  @Query('machineProducesSweet')
  findOne(@Args('id') id: number) {
    return this.machineProducesSweetsService.findOne(id);
  }

  @Mutation('updateMachineProducesSweet')
  update(@Args('updateMachineProducesSweetInput') updateMachineProducesSweetInput: UpdateMachineProducesSweetInput) {
    return this.machineProducesSweetsService.update(updateMachineProducesSweetInput.id, updateMachineProducesSweetInput);
  }

  @Mutation('removeMachineProducesSweet')
  remove(@Args('id') id: number) {
    return this.machineProducesSweetsService.remove(id);
  }
}

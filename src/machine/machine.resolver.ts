import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MachineService } from './machine.service';
import { CreateMachineInput } from './dto/create-machine.input';
import { UpdateMachineInput } from './dto/update-machine.input';

@Resolver('Machine')
export class MachineResolver {
  constructor(private readonly machineService: MachineService) {}

  @Mutation('createMachine')
  create(@Args('createMachineInput') createMachineInput: CreateMachineInput) {
    return this.machineService.create(createMachineInput);
  }

  @Query('machines')
  findAll() {
    return this.machineService.findAll();
  }

  @Query('machine')
  findOne(@Args('id') id: number) {
    return this.machineService.findOne(id);
  }

  @Mutation('updateMachine')
  update(@Args('updateMachineInput') updateMachineInput: UpdateMachineInput) {
    return this.machineService.update(updateMachineInput.id, updateMachineInput);
  }

  @Mutation('removeMachine')
  remove(@Args('id') id: number) {
    return this.machineService.remove(id);
  }
}

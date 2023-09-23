import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MachineService } from './machine.service';
import { Machine, CreateMachineInput, UpdateMachineInput } from 'src/schema/graphql';

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
  findOne(@Args('uuid') uuid: string) {
    return this.machineService.findOne(uuid);
  }

  @Mutation('updateMachine')
  update(@Args('updateMachineInput') updateMachineInput: UpdateMachineInput) {
    return this.machineService.update(updateMachineInput.uuid, updateMachineInput);
  }

  @Mutation('removeMachine')
  remove(@Args('uuid') uuid: string) {
    return this.machineService.remove(uuid);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateMachineInput } from './dto/create-machine.input';
import { UpdateMachineInput } from './dto/update-machine.input';

@Injectable()
export class MachineService {
  create(createMachineInput: CreateMachineInput) {
    return 'This action adds a new machine';
  }

  findAll() {
    return `This action returns all machine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} machine`;
  }

  update(id: number, updateMachineInput: UpdateMachineInput) {
    return `This action updates a #${id} machine`;
  }

  remove(id: number) {
    return `This action removes a #${id} machine`;
  }
}

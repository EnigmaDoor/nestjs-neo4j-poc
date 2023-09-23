import { Injectable } from '@nestjs/common';
import { CreateMachineProducesSweetInput } from './dto/create-machine-produces-sweet.input';
import { UpdateMachineProducesSweetInput } from './dto/update-machine-produces-sweet.input';

@Injectable()
export class MachineProducesSweetsService {
  create(createMachineProducesSweetInput: CreateMachineProducesSweetInput) {
    return 'This action adds a new machineProducesSweet';
  }

  findAll() {
    return `This action returns all machineProducesSweets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} machineProducesSweet`;
  }

  update(id: number, updateMachineProducesSweetInput: UpdateMachineProducesSweetInput) {
    return `This action updates a #${id} machineProducesSweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} machineProducesSweet`;
  }
}

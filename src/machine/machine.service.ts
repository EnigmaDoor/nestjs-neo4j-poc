import { Injectable } from '@nestjs/common';
import { Machine, CreateMachineInput, UpdateMachineInput } from 'src/schema/graphql';
import { MachineRepository } from './machine.repository';

@Injectable()
export class MachineService {
  constructor(private readonly machineRepository: MachineRepository) {}

    async create(createMachineInput: CreateMachineInput): Promise<Machine> {
        return await this.machineRepository.create(createMachineInput);
    }

    async findAll(): Promise<Machine[]> {
        return await this.machineRepository.findAll();
    }


    async findOne(uuid: string): Promise<Machine> {
        return await this.machineRepository.findOne(uuid);
    }

    async update(uuid: string, updateMachineInput: UpdateMachineInput): Promise<Machine> {
        return await this.machineRepository.update(uuid, updateMachineInput);
    }

    async remove(uuid: string): Promise<boolean> {
        return await this.machineRepository.remove(uuid);
    }
}

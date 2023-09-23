import { Injectable } from '@nestjs/common';
import { Neo4jRepository } from 'src/neo4j/neo4j.repository';
import { CreateMachineInput } from './dto/create-machine.input';
import { UpdateMachineInput } from './dto/update-machine.input';

@Injectable()
export class MachineService {
    constructor(private readonly neo4jRepository: Neo4jRepository) {}

    create(createMachineInput: CreateMachineInput) {
    return 'This action adds a new machine';
  }

    async findAll() {
        const query = await this.neo4jRepository
            .initQuery()
            .raw('MATCH (machine: Machine) RETURN machine')
            .run();
        console.log(query)
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

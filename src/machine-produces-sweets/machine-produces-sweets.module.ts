import { Module } from '@nestjs/common';
import { MachineProducesSweetsService } from './machine-produces-sweets.service';
import { MachineProducesSweetsResolver } from './machine-produces-sweets.resolver';

@Module({
  providers: [MachineProducesSweetsResolver, MachineProducesSweetsService],
})
export class MachineProducesSweetsModule {}

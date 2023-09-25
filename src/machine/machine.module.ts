import { Module } from '@nestjs/common';
import { MachineResolver } from './machine.resolver';

@Module({
  providers: [MachineResolver]
})
export class MachineModule {}

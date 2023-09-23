import { Module } from '@nestjs/common';
import { MachineService } from './machine.service';
import { MachineResolver } from './machine.resolver';
import { MachineRepository } from './machine.repository';

@Module({
    providers: [MachineResolver, MachineService, MachineRepository],
    exports: [MachineRepository]
})
export class MachineModule {}

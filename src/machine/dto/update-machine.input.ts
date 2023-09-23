import { CreateMachineInput } from './create-machine.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMachineInput extends PartialType(CreateMachineInput) {
  id: number;
}

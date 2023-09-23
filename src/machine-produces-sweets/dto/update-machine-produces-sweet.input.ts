import { CreateMachineProducesSweetInput } from './create-machine-produces-sweet.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMachineProducesSweetInput extends PartialType(CreateMachineProducesSweetInput) {
  id: number;
}

import { CreateSweetInput } from './create-sweet.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateSweetInput extends PartialType(CreateSweetInput) {
  uuid: string;
}

import { Injectable } from '@nestjs/common';
import { CreateSweetInput } from './dto/create-sweet.input';
import { UpdateSweetInput } from './dto/update-sweet.input';

@Injectable()
export class SweetService {
  create(createSweetInput: CreateSweetInput) {
    return 'This action adds a new sweet';
  }

  findAll() {
    return `This action returns all sweet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sweet`;
  }

  update(id: number, updateSweetInput: UpdateSweetInput) {
    return `This action updates a #${id} sweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} sweet`;
  }
}

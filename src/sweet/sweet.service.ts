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

  findOne(uuid: string) {
    return `This action returns a #${uuid} sweet`;
  }

  update(uuid: string, updateSweetInput: UpdateSweetInput) {
    return `This action updates a #${uuid} sweet`;
  }

  remove(uuid: string) {
    return `This action removes a #${uuid} sweet`;
  }
}

import { Injectable } from '@nestjs/common';
import { Sweet, CreateSweetInput, UpdateSweetInput } from 'src/schema/graphql';
import { SweetRepository } from './sweet.repository';

@Injectable()
export class SweetService {
  constructor(private readonly sweetRepository: SweetRepository) {}

    async create(createSweetInput: CreateSweetInput): Promise<Sweet> {
        return await this.sweetRepository.create(createSweetInput);
    }

    async findAll(): Promise<Sweet[]> {
        return await this.sweetRepository.findAll();
    }


    async findOne(uuid: string): Promise<Sweet> {
        return await this.sweetRepository.findOne(uuid);
    }

    async update(uuid: string, updateSweetInput: UpdateSweetInput): Promise<Sweet> {
        return await this.sweetRepository.update(uuid, updateSweetInput);
    }

    async remove(uuid: string): Promise<boolean> {
        return await this.sweetRepository.remove(uuid);
    }
}

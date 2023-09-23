import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SweetService } from './sweet.service';
import { Sweet, CreateSweetInput, UpdateSweetInput } from 'src/schema/graphql';

@Resolver('Sweet')
export class SweetResolver {
  constructor(private readonly sweetService: SweetService) {}

  @Mutation('createSweet')
  create(@Args('createSweetInput') createSweetInput: CreateSweetInput) {
    return this.sweetService.create(createSweetInput);
  }

  @Query('sweets')
  findAll() {
    return this.sweetService.findAll();
  }

  @Query('sweet')
  findOne(@Args('uuid') uuid: string) {
    return this.sweetService.findOne(uuid);
  }

  @Mutation('updateSweet')
  update(@Args('updateSweetInput') updateSweetInput: UpdateSweetInput) {
    return this.sweetService.update(updateSweetInput.uuid, updateSweetInput);
  }

  @Mutation('removeSweet')
  remove(@Args('uuid') uuid: string) {
    return this.sweetService.remove(uuid);
  }
}

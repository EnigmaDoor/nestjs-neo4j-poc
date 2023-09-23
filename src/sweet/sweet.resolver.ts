import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SweetService } from './sweet.service';
import { CreateSweetInput } from './dto/create-sweet.input';
import { UpdateSweetInput } from './dto/update-sweet.input';

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
  findOne(@Args('id') id: number) {
    return this.sweetService.findOne(id);
  }

  @Mutation('updateSweet')
  update(@Args('updateSweetInput') updateSweetInput: UpdateSweetInput) {
    return this.sweetService.update(updateSweetInput.id, updateSweetInput);
  }

  @Mutation('removeSweet')
  remove(@Args('id') id: number) {
    return this.sweetService.remove(id);
  }
}

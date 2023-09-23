import { Test, TestingModule } from '@nestjs/testing';
import { MachineProducesSweetsResolver } from './machine-produces-sweets.resolver';
import { MachineProducesSweetsService } from './machine-produces-sweets.service';

describe('MachineProducesSweetsResolver', () => {
  let resolver: MachineProducesSweetsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MachineProducesSweetsResolver, MachineProducesSweetsService],
    }).compile();

    resolver = module.get<MachineProducesSweetsResolver>(MachineProducesSweetsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

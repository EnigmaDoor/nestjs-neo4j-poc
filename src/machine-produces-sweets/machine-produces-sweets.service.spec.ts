import { Test, TestingModule } from '@nestjs/testing';
import { MachineProducesSweetsService } from './machine-produces-sweets.service';

describe('MachineProducesSweetsService', () => {
  let service: MachineProducesSweetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MachineProducesSweetsService],
    }).compile();

    service = module.get<MachineProducesSweetsService>(MachineProducesSweetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

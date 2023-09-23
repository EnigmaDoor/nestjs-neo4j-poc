import { Test, TestingModule } from '@nestjs/testing';
import { SweetResolver } from './sweet.resolver';
import { SweetService } from './sweet.service';

describe('SweetResolver', () => {
  let resolver: SweetResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SweetResolver, SweetService],
    }).compile();

    resolver = module.get<SweetResolver>(SweetResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

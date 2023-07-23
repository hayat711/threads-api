import { Test, TestingModule } from '@nestjs/testing';
import { ReplyResolver } from './reply.resolver';
import { ReplyService } from './reply.service';

describe('ReplyResolver', () => {
  let resolver: ReplyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReplyResolver, ReplyService],
    }).compile();

    resolver = module.get<ReplyResolver>(ReplyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { SweetService } from './sweet.service';
import { SweetResolver } from './sweet.resolver';

@Module({
  providers: [SweetResolver, SweetService],
})
export class SweetModule {}

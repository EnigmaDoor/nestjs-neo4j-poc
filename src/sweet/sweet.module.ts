import { Module } from '@nestjs/common';
import { SweetService } from './sweet.service';
import { SweetResolver } from './sweet.resolver';
import { SweetRepository } from './sweet.repository';

@Module({
    providers: [SweetResolver, SweetService, SweetRepository],
    exports: [SweetRepository]
})
export class SweetModule {}

import { Injectable, Module } from '@nestjs/common';
import { WritePostUseCase } from '../../core/post/service/use-case/write-post.use-case';
import { PostController } from './post.controller';
import { PostRepo } from '@src/core/post/persistence/post.repo';
import { TypeOrmPostRepo } from './persistence/type-orm-post.repo';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [
    {
      provide: WritePostUseCase,
      useFactory: (postRepo) => new WritePostUseCase(postRepo),
      inject: [PostRepo],
    },
    {
      provide: PostRepo,
      useClass: TypeOrmPostRepo,
    },
  ],
})
export class PostModule {}

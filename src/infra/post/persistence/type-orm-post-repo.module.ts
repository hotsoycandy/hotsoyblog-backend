import { Module } from '@nestjs/common';
import { TypeOrmPostRepo } from './type-orm-post.repo';
import { PostRepo } from '@src/core/post/persistence/post.repo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostSchema } from './post.schema';

@Module({
  imports: [TypeOrmModule.forFeature([PostSchema])],
  providers: [
    {
      provide: PostRepo,
      useClass: TypeOrmPostRepo,
    },
  ],
  exports: [PostRepo],
})
export class TypeOrmPostRepoModule {}

import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { TypeOrmPostRepoModule } from './persistence/type-orm-post-repo.module';
import { PostUseCaseModule } from '@src/core/post/use-case/post-use-case.module';

@Module({
  imports: [TypeOrmPostRepoModule, PostUseCaseModule],
  controllers: [PostController],
  providers: [],
})
export class PostModule {}

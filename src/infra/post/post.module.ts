import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostUseCaseModule } from '@src/core/post/use-case/post-use-case.module';

@Module({
  imports: [PostUseCaseModule],
  controllers: [PostController],
  providers: [],
})
export class PostModule {}

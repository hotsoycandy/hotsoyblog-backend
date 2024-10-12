import { Module, Provider } from '@nestjs/common';
import { WritePostUseCase } from './write-post.use-case';
import { ViewPostUseCase } from './view-post.use-case';
import { GetPostListUseCase } from './get-post-list.use-case';

const providers: Provider[] = [
  WritePostUseCase,
  ViewPostUseCase,
  GetPostListUseCase,
];

@Module({
  providers: [...providers],
  exports: [...providers],
})
export class PostUseCaseModule {}

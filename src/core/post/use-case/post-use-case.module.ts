import { Module, Provider } from '@nestjs/common';
import { WritePostUseCase } from './write-post.use-case';
import { ViewPostUseCase } from './view-post.use-case';
import { GetPostListUseCase } from './get-post-list.use-case';
import { TypeOrmPostRepoModule } from '@src/infra/post/persistence/type-orm-post-repo.module';
import { PostServiceModule } from '../service/post-service.module';

const providers: Provider[] = [
  WritePostUseCase,
  ViewPostUseCase,
  GetPostListUseCase,
];

@Module({
  imports: [TypeOrmPostRepoModule, PostServiceModule],
  providers: [...providers],
  exports: [...providers],
})
export class PostUseCaseModule {}

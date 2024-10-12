import { Module, Provider } from '@nestjs/common';
import { MustFindOnePostService } from './must-find-ond-post.use-case';
import { TypeOrmPostRepoModule } from '@src/infra/post/persistence/type-orm-post-repo.module';

const providers: Provider[] = [MustFindOnePostService];

@Module({
  imports: [TypeOrmPostRepoModule],
  providers: [...providers],
  exports: [...providers],
})
export class PostServiceModule {}

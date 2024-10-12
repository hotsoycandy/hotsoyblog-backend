import { Module, Provider } from '@nestjs/common';
import { MustFindOnePostService } from './must-find-ond-post.use-case';

const providers: Provider[] = [MustFindOnePostService];

@Module({
  providers: [...providers],
  exports: [...providers],
})
export class PostServiceModule {}

import { Global, Module } from '@nestjs/common';
import { MockedPostRepo } from './post.repo.mock';
import { PostRepo } from '../post.repo';

@Global()
@Module({
  providers: [
    {
      provide: PostRepo,
      useClass: MockedPostRepo,
    },
  ],
  exports: [PostRepo],
})
export class MockedPostRepoModule {}

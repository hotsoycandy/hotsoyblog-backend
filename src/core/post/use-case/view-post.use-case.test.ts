import { Test } from '@nestjs/testing';
import { ViewPostUseCase } from './view-post.use-case';
import { MockedPostRepo } from '../persistence/mock/post.repo.mock';
import { MockedPostRepoModule } from '../persistence/mock/mocked-post-repo.module';
import { PostServiceModule } from '../service/post-service.module';
import { PostRepo } from '../persistence/post.repo';
import { newMockedPost } from '../domain/mock/new-mocked-post';

describe('게시글 조회 UseCase 테스트', () => {
  let viewPostService: ViewPostUseCase;
  let postRepo: MockedPostRepo;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [MockedPostRepoModule, PostServiceModule],
      controllers: [],
      providers: [ViewPostUseCase],
    }).compile();

    viewPostService = moduleRef.get(ViewPostUseCase);
    postRepo = moduleRef.get(PostRepo);
  });

  test('게시글이 DB에 제대로 추가되는가?', async () => {
    const post = newMockedPost();
    postRepo.findOne.mockResolvedValueOnce(post);
    await viewPostService.execute({ postId: post.postId });
    expect(post.viewCount).toBe(1);
  });
});

import { Test } from '@nestjs/testing';
import { ViewPostUseCase } from './view-post.use-case';
import { Post } from '../../domain/post.entity';
import { Uuid } from '../../../common/class/uuid';
import { MockedPostRepo } from '../../persistence/mock/post.repo.mock';

describe('게시글 조회 UseCase 테스트', () => {
  let viewPostService: ViewPostUseCase;
  let postRepo: MockedPostRepo;

  beforeEach(async () => {
    postRepo = new MockedPostRepo();

    const moduleRef = await Test.createTestingModule({
      controllers: [],
      providers: [ViewPostUseCase],
    }).compile();

    viewPostService = moduleRef.get<ViewPostUseCase>(ViewPostUseCase);
  });

  test('게시글이 DB에 제대로 추가되는가?', async () => {
    const post = new Post({ title: '', content: '' });
    postRepo.findOne.mockResolvedValueOnce(post);
    await viewPostService.execute({ postId: new Uuid() });
    expect(post.viewCount).toBe(1);
  });
});

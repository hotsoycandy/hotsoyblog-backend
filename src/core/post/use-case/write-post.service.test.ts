import { faker } from '@faker-js/faker';
import { WritePostUseCase } from './write-post.use-case';
import { MockedPostRepoModule } from '../persistence/mock/mocked-post-repo.module';
import { Test } from '@nestjs/testing';
import { MockedPostRepo } from '../persistence/mock/post.repo.mock';
import { PostRepo } from '../persistence/post.repo';

describe('게시글 작성 UseCase 테스트', () => {
  let writePostService: WritePostUseCase;
  let postRepo: MockedPostRepo;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [MockedPostRepoModule],
      controllers: [],
      providers: [WritePostUseCase],
    }).compile();

    writePostService = moduleRef.get(WritePostUseCase);
    postRepo = moduleRef.get(PostRepo);
  });

  test('게시글이 DB에 제대로 추가되는가?', async () => {
    const title = faker.lorem.words();
    const content = faker.lorem.text();

    await writePostService.execute({
      title,
      content,
    });

    expect(postRepo.isInsertCalled()).toBe(true);
  });
});

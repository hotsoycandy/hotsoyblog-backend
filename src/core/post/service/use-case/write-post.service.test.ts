import { PostRepoMock } from '../../persistence/post.repo.mock';
import { faker } from '@faker-js/faker';
import { WritePostUseCase } from './write-post.use-case';

describe('게시글 작성 UseCase 테스트', () => {
  let writePostService: WritePostUseCase;
  let postRepo: PostRepoMock;

  beforeEach(() => {
    postRepo = new PostRepoMock();
    writePostService = new WritePostUseCase(postRepo);
  });

  test('게시글이 DB에 제대로 추가되는가?', async () => {
    const title = faker.lorem.words();
    const content = faker.lorem.text();

    await writePostService.execute({
      title,
      content,
    });
    expect(postRepo.insert).toHaveBeenCalledTimes(1);
  });
});

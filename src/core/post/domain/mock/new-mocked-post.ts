import { faker } from '@faker-js/faker/.';
import { Post } from '@src/core/post/domain/post.entity';

export function newMockedPost(): Post {
  return new Post({
    title: faker.lorem.word(),
    content: faker.lorem.words(),
  });
}

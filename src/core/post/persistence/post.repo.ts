import { Post } from '../domain/post.entity';

interface FindListPostFilter {}

interface FindListPostOptions {}

interface FindOnePostFilter {}

interface FindOnePostOptions {}

export abstract class PostRepo {
  abstract insert(post: Post): Promise<void>;

  abstract findList(
    filter?: FindListPostFilter,
    options?: FindListPostOptions
  ): Promise<Post[]>;

  abstract findOne(
    filter?: FindOnePostFilter,
    options?: FindOnePostOptions
  ): Promise<Post | undefined>;

  abstract update(post: Post): Promise<Post>;

  abstract delete(post: Post): Promise<void>;
}

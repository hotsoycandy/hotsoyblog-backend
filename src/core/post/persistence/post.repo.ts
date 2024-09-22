import { Post } from '../domain/post.entity';
import { FindPostDto } from './dto/find-one-post.dto';

export abstract class PostRepo {
  abstract insert(post: Post): Promise<void>;

  abstract find(dto: FindPostDto): Promise<Post[]>;

  abstract findOne(dto: FindPostDto): Promise<Post | undefined>;

  abstract update(post: Post): Promise<Post>;

  abstract delete(post: Post): Promise<void>;
}

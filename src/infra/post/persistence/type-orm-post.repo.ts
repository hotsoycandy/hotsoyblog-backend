import { Injectable } from '@nestjs/common';
import { Post } from '@src/core/post/domain/post.entity';
import { PostRepo } from '@src/core/post/persistence/post.repo';

@Injectable()
export class TypeOrmPostRepo extends PostRepo {
  insert: PostRepo['insert'] = async (post) => {
    throw new Error('Method not implemented.');
  };

  find: PostRepo['find'] = async (dto) => {
    throw new Error('Method not implemented.');
  };

  findOne: PostRepo['findOne'] = async (dto) => {
    throw new Error('Method not implemented.');
  };

  update(post: Post): Promise<Post> {
    throw new Error('Method not implemented.');
  }
  delete(post: Post): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

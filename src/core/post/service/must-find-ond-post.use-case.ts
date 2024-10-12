import { Injectable } from '@nestjs/common';
import { NotFoundException } from '../../common/exception/not-found.exception';
import { isUndefined } from '../../common/lib/is-undefined';
import { Post } from '../domain/post.entity';
import { PostRepo } from '../persistence/post.repo';

@Injectable()
export class MustFindOnePostService {
  constructor(private readonly postRepo: PostRepo) {}

  async execute(...args: Parameters<PostRepo['findOne']>): Promise<Post> {
    const post = await this.postRepo.findOne(...args);
    if (isUndefined(post)) {
      throw new NotFoundException({
        code: 'PostNotFound',
        clientMessage: '게시글을 찾을 수 없습니다.',
        internalMessage: 'post 찾을 수 없음',
      });
    }
    return post;
  }
}

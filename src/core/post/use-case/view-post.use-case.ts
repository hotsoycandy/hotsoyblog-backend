import { Injectable } from '@nestjs/common';
import { Uuid } from '../../common/class/uuid';
import { Post } from '../domain/post.entity';
import { PostRepo } from '../persistence/post.repo';
import { MustFindOnePostService } from '../service/must-find-ond-post.use-case';

/** @alias 게시글 조회 */
@Injectable()
export class ViewPostUseCase {
  constructor(
    private readonly postRepo: PostRepo,
    private readonly mustFindOnePost: MustFindOnePostService
  ) {}

  async execute(params: { postId: Uuid }): Promise<Post> {
    const { postId } = params;
    const post = await this.mustFindOnePost.execute({ postId }, {});
    post.increaseViewCount();
    await this.postRepo.update(post);
    return post;
  }
}

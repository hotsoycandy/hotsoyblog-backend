import { Injectable } from '@nestjs/common';
import { Post } from '../domain/post.entity';
import { PostRepo } from '../persistence/post.repo';

/** @alias 게시글 목록 조회 */
@Injectable()
export class GetPostListUseCase {
  constructor(private readonly postRepo: PostRepo) {}

  async execute(): Promise<Post[]> {
    return await this.postRepo.findList();
  }
}

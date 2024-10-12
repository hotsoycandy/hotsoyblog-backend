import { Injectable } from '@nestjs/common';
import { Post } from '../domain/post.entity';
import { PostRepo } from '../persistence/post.repo';

/** @alias 게시글 작성 */
@Injectable()
export class WritePostUseCase {
  constructor(private readonly postRepo: PostRepo) {}

  async execute(params: { title: string; content: string }): Promise<void> {
    const { title, content } = params;
    const post = new Post({
      title,
      content,
    });
    await this.postRepo.insert(post);
  }
}

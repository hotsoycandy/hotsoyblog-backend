import { Post } from '@src/core/post/domain/post.entity';

export class GetPostListApiResponseDto {
  postId!: string;

  static fromEntity(post: Post): GetPostListApiResponseDto {
    return Object.assign(new GetPostListApiResponseDto(), {
      postId: post.postId.toString(),
    });
  }
}

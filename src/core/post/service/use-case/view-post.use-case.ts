import { Uuid } from '../../../common/class/uuid';
import { Post } from '../../domain/post.entity';
import { FindPostDto } from '../../persistence/dto/find-one-post.dto';
import { PostRepo } from '../../persistence/post.repo';
import { MustFindOnePostService } from '../helper/must-find-ond-post.use-case';

/** @alias 게시글 조회 */
export class ViewPostUseCase {
  constructor(
    private readonly postRepo: PostRepo,
    private readonly mustFindOnePost: MustFindOnePostService,
    private readonly findOnePostDto: FindPostDto
  ) {}

  async execute(params: { postId: Uuid }): Promise<Post> {
    const { postId } = params;
    const post = await this.mustFindOnePost.execute(
      this.findOnePostDto.of({ postId })
    );
    post.increaseViewCount();
    await this.postRepo.update(post);
    return post;
  }
}

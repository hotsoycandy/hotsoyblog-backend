import { NotFoundException } from '../../../common/exception/not-found.exception';
import { isUndefined } from '../../../common/lib/is-undefined';
import { Post } from '../../domain/post.entity';
import { FindPostDto } from '../../persistence/dto/find-one-post.dto';
import { PostRepo } from '../../persistence/post.repo';

export class MustFindOnePostService {
  constructor(private readonly postRepo: PostRepo) {}

  async execute(dto: FindPostDto): Promise<Post> {
    const post = await this.postRepo.findOne(dto);
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

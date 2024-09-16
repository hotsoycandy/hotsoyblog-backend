import { Uuid } from "../../common/class/uuid";
import { Post } from "../domain/post.entity";
import { FindPostDto } from "../persistence/dto/find-one-post.dto";
import { PostRepo } from "../persistence/post.repo";
import { MustFindOnePost } from "./must-find-ond-post.service";

export class ViewPostService {
  constructor(
    private readonly postRepo: PostRepo,
    private readonly mustFindOnePost: MustFindOnePost,
    private readonly findOnePostDto: FindPostDto
  ) {}

  async execute(postId: Uuid): Promise<Post> {
    const post = await this.mustFindOnePost.execute(
      this.findOnePostDto.of({ postId })
    );
    post.increaseViewCount();
    await this.postRepo.update(post);
    return post;
  }
}

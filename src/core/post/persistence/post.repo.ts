import { Post } from "../domain/post.entity";
import { MustFindOnePost } from "../service/must-find-ond-post.service";
import { FindPostDto } from "./dto/find-one-post.dto";

export abstract class PostRepo {
  abstract insert(post: Post): Promise<void>;

  abstract find(dto: MustFindOnePost): Promise<Post[]>;

  abstract findOne(dto: FindPostDto): Promise<Post | undefined>;

  abstract findOne(): Promise<Post | undefined>;

  abstract update(post: Post): Promise<Post>;

  abstract delete(post: Post): Promise<void>;
}

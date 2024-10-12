import { Uuid } from '@src/core/common/class/uuid';
import { Post } from '@src/core/post/domain/post.entity';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('post')
export class PostSchema {
  @PrimaryColumn()
  postId!: string;

  @Column()
  title!: string;

  @Column()
  content!: string;

  @Column()
  createdAt!: Date;

  static fromEntity(post: Post): PostSchema {
    return Object.assign(new PostSchema(), {
      postId: post.postId.toString(),
      title: post.title,
      content: post.content,
      createdAt: post.createdAt,
    });
  }

  toEntity(): Post {
    return new Post({
      postId: new Uuid(this.postId),
      title: this.title,
      content: this.content,
      createdAt: this.createdAt,
    });
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '@src/core/post/domain/post.entity';
import { PostRepo } from '@src/core/post/persistence/post.repo';
import { Repository } from 'typeorm';
import { PostSchema } from './post.schema';

@Injectable()
export class TypeOrmPostRepo extends PostRepo {
  constructor(
    @InjectRepository(PostSchema)
    private postRepo: Repository<PostSchema>
  ) {
    super();
  }

  insert: PostRepo['insert'] = async (post) => {
    await this.postRepo.insert(PostSchema.fromEntity(post));
  };

  findList: PostRepo['findList'] = async (dto) => {
    const postSchemas = await this.postRepo.find();
    return postSchemas.map((postSchema) => postSchema.toEntity());
  };

  findOne: PostRepo['findOne'] = async (dto) => {
    throw new Error('Method not implemented.');
  };

  update(post: Post): Promise<Post> {
    throw new Error('Method not implemented.');
  }

  delete(post: Post): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

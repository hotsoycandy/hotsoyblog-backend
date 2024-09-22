import { Controller, Post } from '@nestjs/common';
import { WritePostUseCase } from '@src/core/post/service/use-case/write-post.use-case';

@Controller('posts')
export class PostController {
  constructor(private readonly writePost: WritePostUseCase) {}

  @Post('/')
  async writePostApi() {
    await this.writePost.execute({
      title: '',
      content: '',
    });
  }
}

import { Controller, Get, Post } from '@nestjs/common';
import { GetPostListUseCase } from '@src/core/post/use-case/get-post-list.use-case';
import { WritePostUseCase } from '@src/core/post/use-case/write-post.use-case';
import { GetPostListApiResponseDto } from './dto/get-post-list.dto';

@Controller('posts')
export class PostController {
  constructor(
    private readonly writePost: WritePostUseCase,
    private readonly getPostList: GetPostListUseCase
  ) {}

  @Get('/')
  async getPostListApi(): Promise<GetPostListApiResponseDto[]> {
    const posts = await this.getPostList.execute();
    return posts.map((post) => GetPostListApiResponseDto.fromEntity(post));
  }

  @Post('/')
  async writePostApi() {
    await this.writePost.execute({
      title: '',
      content: '',
    });
  }
}

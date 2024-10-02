import { Controller, Post, Param, Delete, Body } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  createPost(@Body('title') title: string, @Body('content') content: string) {
    return this.postService.createPost(title, content);
  }

  @Delete('soft-delete/:id')
  softDeletePost(@Param('id') id: number) {
    return this.postService.softDeletePost(id);
  }

  @Delete('soft-remove/:id')
  softRemovePost(@Param('id') id: number) {
    return this.postService.softRemovePost(id);
  }
}

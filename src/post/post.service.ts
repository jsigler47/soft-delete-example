import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async createPost(title: string, content: string): Promise<Post> {
    const newPost = this.postRepository.create({ title, content });
    return this.postRepository.save(newPost);
  }

  async softDeletePost(id: number): Promise<void> {
    await this.postRepository.softDelete(id);
  }

  async softRemovePost(id: number): Promise<void> {
    const post = await this.postRepository.findOneBy({ id });
    if (post) {
      await this.postRepository.softRemove(post);
    }
  }
}

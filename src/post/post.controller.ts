import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Put,
    Delete,
    NotFoundException,
  } from '@nestjs/common';
  import { PostRepository } from './post.repository';
  import { CreatePostDTO, UpdatePostDTO } from './post.DTO';
  import { Prisma } from '@prisma/client';
  
  @Controller('post')
  export class PostController {
    constructor(private readonly postRepository: PostRepository) {}
  
    
    @Post()
    async create(@Body() createPostDto: unknown) {
      const parsedData = CreatePostDTO.parse(createPostDto);
  
      const postData: Prisma.PostCreateInput = {
        description: parsedData.description,
        media: parsedData.media,
        user: {
          connect: { id: parsedData.userId },
        },
      };
  
      const post = await this.postRepository.createPost(postData);
  
      return post;
    }
  
    
    @Get()
    async getAll() {
      const posts = await this.postRepository.getAllPosts();
      return posts;
    }
  
    
    @Get(':id')
    async getById(@Param('id') id: string) {
      const post = await this.postRepository.getPostById(id);
      if (!post) {
        throw new NotFoundException('Post não encontrado');
      }
      return post;
    }
  
    
    @Put(':id')
    async update(@Param('id') id: string, @Body() updatePostDto: unknown) {
      const parsedData = UpdatePostDTO.parse(updatePostDto);
  
      const postData: Prisma.PostUpdateInput = {
        ...parsedData,
      };
  
      const post = await this.postRepository.updatePost(id, postData);
  
      return post;
    }
  
    
    @Delete(':id')
    async delete(@Param('id') id: string) {
      const post = await this.postRepository.deletePost(id);
      return post;
    }
  }
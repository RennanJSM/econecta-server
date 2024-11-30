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
  import { CommentRepository } from './comment.repository';
  import { CreateCommentDTO, UpdateCommentDTO } from './comment.DTO';
  import { Prisma } from '@prisma/client';
  import { UserRepository } from '../user/user.repository';
  import { PostRepository } from '../post/post.repository';
  
  @Controller('comment')
  export class CommentController {
    constructor(
      private readonly commentRepository: CommentRepository,
      private readonly userRepository: UserRepository,
      private readonly postRepository: PostRepository,
    ) {}
  
    
    @Post()
    async create(@Body() createCommentDto: unknown) {
      const parsedData = CreateCommentDTO.parse(createCommentDto);
  
      
      const user = await this.userRepository.getUserById(parsedData.userId);
      if (!user) {
        throw new NotFoundException('Usuário não encontrado');
      }
  
      
      const post = await this.postRepository.getPostById(parsedData.postId);
      if (!post) {
        throw new NotFoundException('Post não encontrado');
      }
  
      const commentData: Prisma.CommentCreateInput = {
        text: parsedData.text,
        user: {
          connect: { id: parsedData.userId },
        },
        post: {
          connect: { id: parsedData.postId },
        },
      };
  
      const comment = await this.commentRepository.createComment(commentData);
  
      return comment;
    }
  
    
    @Get('post/:postId')
    async getByPostId(@Param('postId') postId: string) {
      const comments = await this.commentRepository.getCommentsByPostId(postId);
      return comments;
    }
  
    
    @Get(':id')
    async getById(@Param('id') id: string) {
      const comment = await this.commentRepository.getCommentById(id);
      if (!comment) {
        throw new NotFoundException('Comentário não encontrado');
      }
      return comment;
    }
  
    
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateCommentDto: unknown) {
      const parsedData = UpdateCommentDTO.parse(updateCommentDto);
  
      const comment = await this.commentRepository.updateComment(id, parsedData);
  
      return comment;
    }
  
    
    @Delete(':id')
    async delete(@Param('id') id: string) {
      const comment = await this.commentRepository.deleteComment(id);
      return comment;
    }
  }
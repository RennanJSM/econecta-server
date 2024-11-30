import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CommentRepository {
  constructor(private prisma: PrismaService) {}

  
  async createComment(data: Prisma.CommentCreateInput) {
    return this.prisma.comment.create({
      data,
    });
  }

  
  async getCommentById(id: string) {
    return this.prisma.comment.findUnique({
      where: { id },
      include: { user: true, post: true },
    });
  }

  
  async getCommentsByPostId(postId: string) {
    return this.prisma.comment.findMany({
      where: { postId },
      include: { user: true },
    });
  }

  
  async updateComment(id: string, data: Prisma.CommentUpdateInput) {
    return this.prisma.comment.update({
      where: { id },
      data,
    });
  }

  
  async deleteComment(id: string) {
    return this.prisma.comment.delete({
      where: { id },
    });
  }
}
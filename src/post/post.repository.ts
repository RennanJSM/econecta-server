import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostRepository {
  constructor(private prisma: PrismaService) {}

  
  async createPost(data: Prisma.PostCreateInput) {
    return this.prisma.post.create({
      data,
    });
  }

  
  async getPostById(id: string) {
    return this.prisma.post.findUnique({
      where: { id },
      include: { user: true, comments: true },
    });
  }

  
  async getAllPosts() {
    return this.prisma.post.findMany({
      include: { user: true, comments: true },
    });
  }

  
  async updatePost(id: string, data: Prisma.PostUpdateInput) {
    return this.prisma.post.update({
      where: { id },
      data,
    });
  }

  
  async deletePost(id: string) {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
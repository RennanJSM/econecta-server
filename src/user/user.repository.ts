// src/user/user.repository.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  
  async createUser(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data,
    });
  }

  
  async getUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  
  async getUserById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  
  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  
  async updateUser(id: string, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  
  async deleteUser(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}

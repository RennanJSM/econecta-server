import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentRepository } from './comment.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { UserModule } from '../user/user.module';
import { PostModule } from '../post/post.module';

@Module({
  imports: [PrismaModule, UserModule, PostModule],
  controllers: [CommentController],
  providers: [CommentRepository],
})
export class CommentModule {}
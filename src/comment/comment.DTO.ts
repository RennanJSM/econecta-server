import { z } from 'zod';

export const CreateCommentDTO = z.object({
  userId: z.string().cuid(),
  postId: z.string().cuid(),
  text: z.string().min(1, 'O comentário não pode ser vazio'),
});

export type CreateCommentType = z.infer<typeof CreateCommentDTO>;

export const UpdateCommentDTO = z.object({
  text: z.string().min(1).optional(),
});

export type UpdateCommentType = z.infer<typeof UpdateCommentDTO>;
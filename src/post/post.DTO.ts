import { z } from 'zod';

export const CreatePostDTO = z.object({
  userId: z.string().cuid(),
  description: z.string().min(1, 'Descrição é obrigatória'),
  media: z.string().url('URL da mídia inválida'),
});

export type CreatePostType = z.infer<typeof CreatePostDTO>;

export const UpdatePostDTO = z.object({
  description: z.string().min(1).optional(),
  media: z.string().url().optional(),
});

export type UpdatePostType = z.infer<typeof UpdatePostDTO>;
import { z } from 'zod';

export const GenderEnum = z.enum(['MASCULINO', 'FEMININO', 'OUTRO']);

export const CreateUserDTO = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  password: z.string().min(6),
  birthDate: z.preprocess((arg) => {
    if (typeof arg == 'string' || arg instanceof Date) return new Date(arg);
  }, z.date()),
  gender: GenderEnum,
  address: z.string().min(1),
  cep: z.string().length(8),
  cidade: z.string().min(1),
  bairro: z.string().optional(),
  householdSize: z.number().min(1),
  wasteTypes: z.array(z.string()).min(1),
  preferences: z.array(z.string()).min(1),
  wasteFrequency: z.enum(['MUITO_POUCO', 'MODERADO', 'MUITO']),
  diyLevel: z.enum(['INICIANTE', 'INTERMEDIARIO', 'AVANCADO']),
  availableTime: z.number().nonnegative().optional(),
  profile: z.string().url().optional(),
});


export type CreateUserType = z.infer<typeof CreateUserDTO>;


export const UpdateUserDTO = CreateUserDTO.partial();
export type UpdateUserType = z.infer<typeof UpdateUserDTO>;

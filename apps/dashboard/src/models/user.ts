import { z } from "zod";
import { genderEnum } from "@/models/common";

export const userSchema = z.object({
  id: z.number(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  avatar: z.string().nullable(),
  gender: genderEnum,
  date_of_birth: z.string(),
  city: z.string(),
});

export const userResponseSchema = z.object({
  success: z.boolean(),
  data: userSchema,
  error: z.string().optional(),
});

export const updateUserAvatarResponseSchema = z.object({
  success: z.boolean(),
  data: z.object({
    type: z.string(),
    url: z.string(),
  }),
  error: z.string().optional(),
});

export type UserResponse = z.infer<typeof userResponseSchema>;
export type UpdateUserAvatarResponse = z.infer<
  typeof updateUserAvatarResponseSchema
>;
export type User = z.infer<typeof userSchema>;

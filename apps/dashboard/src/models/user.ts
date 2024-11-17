import { z } from "zod";
import { genderEnum } from "@/models/common";

export const userSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  avatar: z.string(),
  gender: genderEnum,
  date_of_birth: z.string(),
  city: z.string(),
});

export const userResponseSchema = z.object({
  success: z.boolean(),
  data: userSchema,
  error: z.string().optional(),
});

export type UserResponse = z.infer<typeof userResponseSchema>;
export type User = z.infer<typeof userSchema>;

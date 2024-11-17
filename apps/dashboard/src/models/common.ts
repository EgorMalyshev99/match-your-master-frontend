import { z, ZodEnum } from "zod";

export const genderEnum = ZodEnum.create(["male", "female"]);
export type Gender = "male" | "female";

export const postResponseSchema = z.object({
  success: z.boolean(),
  error: z.string().optional(),
});

export type PostResponse = z.infer<typeof postResponseSchema>;

import { z, ZodEnum } from "zod";

export const genderEnum = ZodEnum.create(["male", "female"], {
  errorMap: (issue, ctx) => {
    if (issue.code === z.ZodIssueCode.invalid_enum_value) {
      return { message: "Необходимо указать пол" };
    }

    return { message: ctx.defaultError };
  },
});
export type Gender = "male" | "female";

export const postResponseSchema = z.object({
  success: z.boolean(),
  error: z.string().optional(),
});

export type PostResponse = z.infer<typeof postResponseSchema>;

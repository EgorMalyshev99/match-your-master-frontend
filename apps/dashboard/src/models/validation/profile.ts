import { z } from "zod";
import { genderEnum } from "@/models/common";

export const profileUpdateSchema = z.object({
  first_name: z.string().min(1, "Это поле не может быть пустым"),
  last_name: z.string().min(1, "Это поле не может быть пустым"),
  gender: genderEnum,
  date_of_birth: z
    .date()
    .or(z.string().min(1, "Это поле не может быть пустым")),
  city: z.string().min(1, "Это поле не может быть пустым"),
});

export type ProfileUpdateInputs = z.infer<typeof profileUpdateSchema>;

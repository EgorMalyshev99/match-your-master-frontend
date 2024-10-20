import { z } from "zod";

const userSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  avatar: z.string(),
  age: z.string(),
  qualification: z.string(),
  city: z.string(),
  phone: z.string(),
  email: z.string().nullable(),
  telegram: z.string().nullable(),
  whatsApp: z.string().nullable(),
  personalWebsite: z.string().nullable(),
});

export type User = z.infer<typeof userSchema>;

import { z } from "zod";

const userProfileSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  avatar: z.string(),
  date_of_birth: z.string(),
  city: z.string(),
});

export type UserProfile = z.infer<typeof userProfileSchema>;

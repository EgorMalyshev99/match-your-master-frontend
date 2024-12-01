import z from "zod";
import { genderEnum } from "@/models/common";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Необходимо заполнить логин")
    .email("Неверный формат"),
  password: z
    .string()
    .min(1, "Необходимо заполнить пароль")
    .min(8, "Пароль должен содержать не менее 8 символов")
    .max(32, "Пароль может содержать не более 32 символов"),
});

export const signUpSchema = z.object({
  first_name: z.string().min(1, "Необходимо заполнить имя"),
  last_name: z.string().min(1, "Необходимо заполнить фамилию"),
  gender: genderEnum.or(z.string().min(1, "Необходимо выбрать пол")),
  city: z.string().min(1, "Необходимо заполнить город"),
  email: z
    .string()
    .min(1, "Необходимо заполнить email")
    .email("Неверный формат"),
  date_of_birth: z
    .date()
    .or(z.string().min(1, "Необходимо заполнить дату рождения")),
  password: z
    .string()
    .min(1, "Необходимо заполнить пароль")
    .min(8, "Пароль должен содержать не менее 8 символов")
    .max(32, "Пароль может содержать не более 32 символов")
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d.@$!%*?&]+$/,
      "Пароль должен содержать хотя бы 1 заглавную букву, 1 цифру и 1 специальный символ",
    ),
  repeat_password: z.string().min(1, "Необходимо повторить пароль"),
});

export type SignUpInputs = z.infer<typeof signUpSchema>;

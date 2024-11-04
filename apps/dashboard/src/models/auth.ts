import z from "zod";

export const signInSchema = z.object({
  email: z.string({ required_error: "Необходимо заполнить логин" }),
  password: z.string({ required_error: "Необходимо заполнить пароль" }),
});

// export const signInSchema = z.object({
//   email: z
//       .string({ required_error: "Необходимо заполнить логин" })
//       .min(1, "Необходимо заполнить логин")
//       .email("Invalid email"),
//   password: z
//       .string({ required_error: "Необходимо заполнить пароль" })
//       .min(1, "Необходимо заполнить пароль")
//       .min(8, "Пароль должен содержать не менее 8 символов")
//       .max(32, "Пароль может содержать не более 32 символов"),
// });

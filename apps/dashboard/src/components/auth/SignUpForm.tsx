"use client";
import React from "react";
import s from "./sign-in-form.module.scss";
import { Button, PasswordInput, Text, TextInput } from "@mantine/core";
import { signIn } from "next-auth/react";
import { Route } from "@/enums/navigation";
import { useForm } from "@mantine/form";
import { validateEmail, validatePassword } from "@/lib/validation";

interface Props {
  className?: string;
}

interface Inputs {
  email: string;
  password: string;
  repeat_password: string;
}

const SignUpForm = ({ className }: Props) => {
  const form = useForm<Inputs>({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      repeat_password: "",
    },
    validateInputOnChange: true,
    validate: {
      email: validateEmail,
      password: validatePassword,
      repeat_password: (value, values) => {
        if (!value) {
          return "Необходимо повторно ввести пароль";
        }

        if (value !== values.password) {
          return "Пароли не совпадают";
        }

        return null;
      },
    },
  });

  const handleSubmit = async (values: Inputs) => {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    console.log(formData);
    await signIn("credentials", {
      redirectTo: Route.PROFILE,
      ...formData,
    });
  };

  return (
    <div className={`${s.signUp} ${className}`}>
      <form className={s.form} onSubmit={form.onSubmit(handleSubmit)}>
        <div>
          <TextInput
            label={
              <Text fw={600} size="sm" className="mb-3">
                Email
              </Text>
            }
            placeholder="Введите Email"
            key={form.key("email")}
            {...form.getInputProps("email")}
            mb="xs"
          />
          <PasswordInput
            label={
              <Text fw={600} size="sm" className="mb-3">
                Пароль
              </Text>
            }
            {...form.getInputProps("password")}
            key={form.key("password")}
            placeholder="Введите пароль"
            mb="sm"
          />
          <PasswordInput
            label={
              <Text fw={600} size="sm" className="mb-3">
                Повторите пароль
              </Text>
            }
            {...form.getInputProps("repeat_password")}
            key={form.key("repeat_password")}
            placeholder="Повторите пароль"
            mb="sm"
          />
          <Button className="mt-10" fullWidth size="md" type="submit">
            Зарегистрироваться
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;

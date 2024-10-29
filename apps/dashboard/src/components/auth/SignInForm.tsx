"use client";
import React from "react";
import s from "./sign-in-form.module.scss";
import { Button, PasswordInput, TextInput, Text } from "@mantine/core";
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
}

const SignInForm = ({ className }: Props) => {
  const form = useForm<Inputs>({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
    validateInputOnChange: true,
    validate: {
      email: validateEmail,
      password: validatePassword,
    },
  });

  const handleSubmit = async (values: Inputs) => {
    console.log(values);

    await signIn("credentials", {
      redirectTo: Route.PROFILE,
      ...values,
    });
  };

  return (
    <div className={`${s.signIn} ${className}`}>
      <form className={s.form} onSubmit={form.onSubmit(handleSubmit)}>
        <div>
          <TextInput
            label={
              <Text fw={600} size="sm" className="mb-3">
                Email
              </Text>
            }
            type="email"
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
          <Button className="mt-10" fullWidth size="md" type="submit">
            Войти
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

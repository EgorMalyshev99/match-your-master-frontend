"use client";
import React from "react";
import GithubAuthButton from "@/components/auth/GithubAuthButton";
import s from "./sign-in-form.module.scss";
import {
  Button,
  Container,
  Divider,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { Route } from "@/enums/navigation";
import { useForm } from "@mantine/form";

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
      email: (value) => {
        if (!value) {
          return "Необходимо ввести email";
        }

        if (!/^\S+@\S+$/.test(value)) {
          return "Некорректный email";
        }

        return null;
      },
      password: (value) => {
        if (!value) {
          return "Необходимо ввести пароль";
        }
        if (value.length < 8) {
          return "Пароль должен содержать не менее 8 символов";
        }
        if (value.length > 32) {
          return "Пароль не должен превышать 32 символа";
        }
        if (!/[a-z]/.test(value)) {
          return "Пароль должен содержать хотя бы одну строчную букву";
        }
        if (!/[A-Z]/.test(value)) {
          return "Пароль должен содержать хотя бы одну заглавную букву";
        }
        if (!/\d/.test(value)) {
          return "Пароль должен содержать хотя бы одну цифру";
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
    <div className={`${s.signIn} ${className}`}>
      <Container size="lg">
        <div className={s.content}>
          <Image
            src="/img/logo.webp"
            width={100}
            height={100}
            className="d-block mx-auto mb-10"
            priority
            alt="Logo"
          />
          <form className={s.form} onSubmit={form.onSubmit(handleSubmit)}>
            <div>
              <TextInput
                label="Email"
                placeholder="Введите Email"
                key={form.key("email")}
                {...form.getInputProps("email")}
                mb="xs"
              />
              <PasswordInput
                label="Пароль"
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
          <Divider my="md" label="Или" labelPosition="center" />
          <GithubAuthButton />
        </div>
      </Container>
    </div>
  );
};

export default SignInForm;

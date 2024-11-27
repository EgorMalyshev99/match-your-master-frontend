"use client";
import React, { useState } from "react";
import s from "./sign-in-form.module.scss";
import {
  Button,
  PasswordInput,
  TextInput,
  Text,
  Checkbox,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { validateEmail, validateRequired } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { Route } from "@/enums/navigation";
import { signIn } from "next-auth/react";

interface Props {
  className?: string;
}

interface Inputs {
  email: string;
  password: string;
  remember_me: boolean;
}

const SignInForm = ({ className }: Props) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const router = useRouter();
  const form = useForm<Inputs>({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      remember_me: false,
    },
    validateInputOnChange: true,
    validate: {
      email: validateEmail,
      password: validateRequired,
    },
  });

  const handleSubmit = async (values: Inputs) => {
    setDisabled(true);

    try {
      const response = await signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: Route.PROFILE,
        redirect: false,
      });
      if (response?.error) {
        console.log(response.error);
      } else {
        router.refresh();
        router.push(Route.PROFILE);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setDisabled(false);
    }
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
            disabled={disabled}
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
            disabled={disabled}
            mb="sm"
          />
          <Checkbox
            label="Запомнить меня"
            {...form.getInputProps("remember_me")}
            disabled={disabled}
            key={form.key("remember_me")}
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

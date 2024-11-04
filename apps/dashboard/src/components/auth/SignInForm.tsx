"use client";
import React, { useEffect } from "react";
import s from "./sign-in-form.module.scss";
import {
  Button,
  PasswordInput,
  TextInput,
  Text,
  Checkbox,
} from "@mantine/core";
// import { signIn } from "next-auth/react";
// import { Route } from "@/enums/navigation";
import { useForm } from "@mantine/form";
import { validateEmail, validatePassword } from "@/lib/validation";
import { getCookie } from "cookies-next";
import { API_PATHS } from "@/const";
import { publicConfig } from "@/config";
import axios from "axios";

interface Props {
  className?: string;
}

interface Inputs {
  email: string;
  password: string;
  remember_me: boolean;
}

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const SignInForm = ({ className }: Props) => {
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
      password: validatePassword,
    },
  });

  const handleSubmit = async (values: Inputs) => {
    console.log(values);
    const res = await axios.post(
      `${publicConfig.apiHost}${API_PATHS.login}`,
      values,
      {
        headers: {
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": getCookie("XSRF-TOKEN") ?? "",
        },
      },
    );

    console.log(res.data);
    // await signIn("credentials", {
    //   redirectTo: Route.PROFILE,
    //   ...values,
    // });
  };

  useEffect(() => {
    axios.get(`${publicConfig.apiHost}${API_PATHS.csrf}`);
  }, []);

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
          <Checkbox
            label="Запомнить меня"
            {...form.getInputProps("remember_me")}
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

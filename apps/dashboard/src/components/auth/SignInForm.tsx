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
import { validateEmail, validatePassword } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { API_PATHS } from "@/const";
import axios from "axios";
import { publicConfig } from "@/config";
import { authorize } from "@/lib/requests";
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

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

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
      password: validatePassword,
    },
  });

  const handleSubmit = (values: Inputs) => {
    setDisabled(true);
    axios
      .get(`${publicConfig.apiHost}${API_PATHS.csrf}`)
      .then(() => {
        authorize(values)
          .then(() => {
            signIn("credentials", {
              ...values,
              redirect: false,
            })
              .then((response) => {
                if (response?.status === 200) {
                  router.push(Route.PROFILE);
                }
              })
              .catch((nextAuthError) => {
                setDisabled(false);
                console.error(nextAuthError);
              });
          })
          .catch((authError) => {
            setDisabled(false);
            console.error(authError);
          });
      })
      .catch((xsrfError) => {
        setDisabled(false);
        console.error(1, xsrfError);
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

"use client";
import React, { useState } from "react";
import s from "./sign-in-form.module.scss";
import {
  Button,
  PasswordInput,
  TextInput,
  Text,
  Checkbox,
  Alert,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useRouter } from "next/navigation";
import { Route } from "@/enums/navigation";
import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { signInSchema } from "@/models/validation/auth";

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
  const [errorSummary, setErrorSummary] = useState<string>("");
  const router = useRouter();
  const form = useForm<Inputs>({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      remember_me: false,
    },
    validateInputOnChange: true,
    validate: zodResolver(signInSchema),
  });

  const handleSubmit = async (values: Inputs) => {
    setDisabled(true);
    setErrorSummary("");

    try {
      const response = await signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: Route.PROFILE,
        redirect: false,
      });
      if (response?.error) {
        console.error(response.error);
        setErrorSummary("Неправильный логин или пароль");
      } else {
        router.refresh();
        router.push(Route.PROFILE);
      }
    } catch (error) {
      console.error(error);
      setErrorSummary("Неправильный логин или пароль");
    } finally {
      setDisabled(false);
    }
  };

  return (
    <div className={`${s.signIn} ${className}`}>
      {errorSummary ? (
        <Alert
          variant="light"
          color="red"
          title="Ошибка"
          icon={<FontAwesomeIcon icon={faExclamationTriangle} />}
          mb="sm"
        >
          <Text size="sm" c="red">
            {errorSummary}
          </Text>
        </Alert>
      ) : (
        ""
      )}
      <form className={s.form} onSubmit={form.onSubmit(handleSubmit)}>
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
      </form>
    </div>
  );
};

export default SignInForm;

"use client";
import React from "react";
import GithubAuthButton from "@/components/auth/GithubAuthButton";
import s from "./sign-in-form.module.scss";
import { Button, Divider, PasswordInput, TextInput } from "@mantine/core";

interface Props {
  className?: string;
}

const SignUpForm = ({ className }: Props) => {
  const onSubmit = (evt: React.FormEvent) => {
    console.log(evt);
  };

  return (
    <div className={`${s.signIn} ${className}`}>
      <form className={s.form} onSubmit={onSubmit}>
        <div>
          <TextInput label="Email" placeholder="Введите Email" mb="xs" />
          <PasswordInput label="Пароль" placeholder="Введите пароль" mb="xs" />
          <PasswordInput
            label="Повторите пароль"
            placeholder="Введите пароль"
            mb="sm"
          />
          <Button fullWidth size="md">
            Войти
          </Button>
        </div>
        <Divider label="или" />
        <GithubAuthButton />
      </form>
    </div>
  );
};

export default SignUpForm;

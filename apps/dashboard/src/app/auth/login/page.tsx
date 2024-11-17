import React from "react";
import SignInForm from "@/components/auth/SignInForm";
import s from "./login.module.scss";
import Image from "next/image";
import { Button, Container } from "@mantine/core";
import Link from "next/link";
import { Route } from "@/enums/navigation";

const Login = async () => {
  return (
    <div className={s.login}>
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
          <SignInForm />
          <Button
            className="mt-6"
            size="md"
            variant="outline"
            component={Link}
            href={Route.SIGNUP}
            fullWidth
          >
            Регистрация
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Login;

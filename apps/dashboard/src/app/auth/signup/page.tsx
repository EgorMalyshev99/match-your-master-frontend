import React from "react";
import s from "./signup.module.scss";
import { Button, Container, Divider } from "@mantine/core";
import Image from "next/image";
import SignUpForm from "@/components/auth/SignUpForm";
import Link from "next/link";
import { Route } from "@/enums/navigation";

const Signup = () => {
  return (
    <div className={s.signup}>
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
          <SignUpForm />
          <Divider label="или" className="my-8" />
          <Button
            size="md"
            variant="outline"
            component={Link}
            href={Route.LOGIN}
            fullWidth
          >
            Войти через email
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Signup;

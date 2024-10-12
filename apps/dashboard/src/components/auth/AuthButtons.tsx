"use client";
import React from "react";
import s from "./auth-buttons.module.scss";
import useAuthStore from "@/store/auth";
import Button from "@/components/button/Button";

interface Props {
  className?: string;
}

const AuthButtons = ({ className = "" }: Props) => {
  const { setSignInOpened, setSignUpOpened } = useAuthStore();

  return (
    <div className={`${s.authButtons} ${className}`}>
      <Button className="mr-4" onClick={() => setSignInOpened(true)}>
        Войти
      </Button>
      <Button onClick={() => setSignUpOpened(true)}>Зарегистрироваться</Button>
    </div>
  );
};

export default AuthButtons;

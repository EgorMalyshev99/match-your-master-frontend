"use client";
import React from "react";
import Image from "next/image";
import s from "./github-auth-button.module.scss";
import { signIn } from "next-auth/react";
import { Route } from "@/enums/navigation";

interface Props {
  className?: string;
}

const GithubAuthButton = ({ className = "" }: Props) => {
  const loginClickHandler = async () => {
    await signIn("github", { redirectTo: Route.PROFILE });
  };

  return (
    <button
      type="button"
      className={`${s.githubButton} ${className}`}
      onClick={loginClickHandler}
    >
      <Image
        src="/img/github-mark-white.svg"
        width={20}
        height={20}
        className="mr-2"
        alt="GitHub"
      />
      Войти через GitHub
    </button>
  );
};

export default GithubAuthButton;

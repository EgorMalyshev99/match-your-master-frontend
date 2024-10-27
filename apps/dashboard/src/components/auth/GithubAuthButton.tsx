import React from "react";
import Image from "next/image";
import s from "./github-auth-button.module.scss";
import { Route } from "@/enums/navigation";
import { signIn } from "@/auth";

interface Props {
  className?: string;
}

async function getSignIn() {
  return await signIn("github", { callbackUrl: Route.PROFILE });
}

const GithubAuthButton = ({ className = "" }: Props) => {
  const loginClickHandler = async () => {
    await getSignIn();
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
      Login via GitHub
    </button>
  );
};

export default GithubAuthButton;

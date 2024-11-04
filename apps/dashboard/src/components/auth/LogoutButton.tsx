"use client";
import React from "react";
import s from "./logout-button.module.scss";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Route } from "@/enums/navigation";

function LogoutButton() {
  const router = useRouter();
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const logout = async () => {
    setDisabled(true);
    signOut({
      redirect: false,
    })
      .then(() => {
        router.push(Route.LOGIN);
      })
      .finally(() => {
        setDisabled(false);
      });
  };

  return (
    <button
      className={s.logoutBtn}
      type="button"
      onClick={logout}
      disabled={disabled}
    >
      Выйти
    </button>
  );
}

export default LogoutButton;

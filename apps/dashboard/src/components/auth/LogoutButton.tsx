"use client";
import React, {useState} from "react";
import s from "./logout-button.module.scss";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Route } from "@/enums/navigation";
import {useProfileStore} from "@/store/profile";

function LogoutButton() {
  const router = useRouter();
  const [disabled, setDisabled] = useState<boolean>(false);
  const profileStore = useProfileStore();
  const logout = async () => {
    setDisabled(true);
    signOut({
      redirect: false,
    })
      .then(() => {
        profileStore.reset();
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

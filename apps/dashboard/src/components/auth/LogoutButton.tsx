"use client";
import React from "react";
import s from "./logout-button.module.scss";
import { signOut } from "next-auth/react";
import { Route } from "@/enums/navigation";

function LogoutButton() {
  const logout = async () => {
    await signOut({ redirectTo: Route.LOGIN });
  };

  return (
    <button className={s.logoutBtn} type="button" onClick={logout}>
      Выйти
    </button>
  );
}

export default LogoutButton;

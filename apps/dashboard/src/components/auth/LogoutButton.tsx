"use client";
import React from "react";
import s from "./logout-button.module.scss";
import useSessionStore from "@/store/session";

function LogoutButton() {
  const { logout } = useSessionStore();

  return (
    <button className={s.logoutBtn} type="button" onClick={() => logout()}>
      Log out
    </button>
  );
}

export default LogoutButton;

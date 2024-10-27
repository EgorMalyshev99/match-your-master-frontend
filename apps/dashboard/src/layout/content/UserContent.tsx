"use client";
import React from "react";
import s from "./user-content.module.scss";
import { SessionProvider } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}
const UserContent = ({ children }: Props) => {
  return (
    <SessionProvider>
      <section className={s.userContent}>{children}</section>
    </SessionProvider>
  );
};

export default UserContent;

"use client";
import React from "react";
import UserHeader from "@/components/layout/header/UserHeader";
import UserSidebar from "@/components/layout/sidebar/UserSidebar";
import UserFooter from "@/components/layout/footer/UserFooter";
import s from "./layout.module.scss";
import { SessionProvider } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <SessionProvider>
        <UserHeader />
        <main id="content">
          <div className={s.layout}>
            <UserSidebar />
            <section className={s.userContent}>{children}</section>
          </div>
        </main>
        <UserFooter />
      </SessionProvider>
    </>
  );
};

export default Layout;

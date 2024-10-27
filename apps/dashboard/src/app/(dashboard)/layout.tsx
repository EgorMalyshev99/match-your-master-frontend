import React from "react";
import Header from "@/layout/header/Header";
import UserSidebar from "@/layout/sidebar/UserSidebar";
import UserContent from "@/layout/content/UserContent";
import Footer from "@/layout/footer/Footer";
import s from "./layout.module.scss";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Route } from "@/enums/navigation";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  const session = await auth();
  if (!session) {
    redirect(Route.LOGIN);
  }

  return (
    <>
      <Header />
      <main id="content">
        <div className={s.layout}>
          <UserSidebar />
          <UserContent>{children}</UserContent>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;

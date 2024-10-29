import React from "react";
import UserHeader from "@/components/layout/header/UserHeader";
import UserSidebar from "@/components/layout/sidebar/UserSidebar";
import UserContent from "@/components/layout/content/UserContent";
import UserFooter from "@/components/layout/footer/UserFooter";
import s from "./layout.module.scss";
import { auth } from "@/lib/auth";
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
      <UserHeader />
      <main id="content">
        <div className={s.layout}>
          <UserSidebar />
          <UserContent>{children}</UserContent>
        </div>
      </main>
      <UserFooter />
    </>
  );
};

export default Layout;

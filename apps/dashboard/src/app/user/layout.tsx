import React from "react";
import UserSidebar from "@/layout/sidebar/UserSidebar";
import UserContent from "@/layout/content/UserContent";
import s from "./user-layout.module.scss";

interface Props {
  children: React.ReactNode;
}

const UserLayout = ({ children }: Props) => {
  return (
    <div className={s.userLayout}>
      <UserSidebar />
      <UserContent>{children}</UserContent>
    </div>
  );
};

export default UserLayout;

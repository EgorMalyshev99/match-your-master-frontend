import React from "react";
import s from "./user-content.module.scss";

interface Props {
  children: React.ReactNode;
}
const UserContent = ({ children }: Props) => {
  return <section className={s.userContent}>{children}</section>;
};

export default UserContent;

import React from "react";
import s from "./user-card-md.module.scss";
import Image from "next/image";
import { User } from "@/models/user";

interface Props {
  user: User;
}

const UserCardMd = ({ user }: Props) => {
  return (
    <div className={s.userCard}>
      <Image
        src={user.avatar}
        className={`${s.userAvatar} mb-2`}
        width={150}
        height={150}
        alt={user.firstName}
      />
      <div className={s.userName}>{`${user.firstName} ${user.lastName}`}</div>
    </div>
  );
};

export default UserCardMd;

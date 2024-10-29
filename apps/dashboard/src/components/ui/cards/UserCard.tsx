import React from "react";
import s from "./user-card.module.scss";
import Image from "next/image";
import { User } from "next-auth";

interface Props {
  user: User;
}

const UserCard = ({ user }: Props) => {
  if (!user.name || !user.image) {
    return null;
  }

  return (
    <div className={s.userCard}>
      <Image
        src={user.image}
        className={`${s.userAvatar} mb-2`}
        width={120}
        height={120}
        alt={user.name}
      />
      <div className={s.userName}>{`${user.name}`}</div>
    </div>
  );
};

export default UserCard;

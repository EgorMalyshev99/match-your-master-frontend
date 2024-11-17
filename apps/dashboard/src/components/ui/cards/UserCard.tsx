import React from "react";
import s from "./user-card.module.scss";
import Image from "next/image";
import { User } from "@/models/user";
import { parseImageUrl } from "@/lib/image";

interface Props {
  user: User;
}

const UserCard = ({ user }: Props) => {
  if (!user) {
    return <></>;
  }

  return (
    <div className={s.userCard}>
      <Image
        src={parseImageUrl(user.avatar)}
        className={`${s.userAvatar} mb-2`}
        width={120}
        height={120}
        alt={user.first_name + " " + user.last_name}
      />
      <div className={s.userName}>{`${user.first_name} ${user.last_name}`}</div>
    </div>
  );
};

export default UserCard;

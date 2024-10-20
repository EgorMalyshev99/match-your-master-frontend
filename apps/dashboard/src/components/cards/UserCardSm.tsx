"use client";
import React from "react";
import Image from "next/image";
import s from "./user-card-sm.module.scss";
import { User } from "@/models/user";

interface Props {
  user: User;
  className?: string;
}

function UserCardSm({ user, className = "" }: Props) {
  const { firstName, avatar } = user;

  return (
    <div className={`${s.userCard} ${className}`}>
      <Image
        className={s.userAvatar}
        src={avatar}
        width={40}
        height={40}
        alt={firstName}
      />
      <span className={s.userName}>{firstName}</span>
    </div>
  );
}

export default UserCardSm;

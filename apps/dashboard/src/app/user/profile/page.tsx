"use client";
import React from "react";
import s from "./profile.module.scss";
import UserCardMd from "@/components/cards/UserCardMd";
import useSessionStore from "@/store/session";
import { redirect } from "next/navigation";
import { Route } from "@/enums/navigation";
import UserInfo from "@/components/user/UserInfo";
import Image from "next/image";
import PhoneCard from "@/components/cards/PhoneCard";

const Profile = () => {
  const { user } = useSessionStore();
  if (!user) {
    redirect(Route.LOGIN);
  }

  return (
    <div className={s.profile}>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="flex justify-center mb-6">
            <UserCardMd user={user} />
          </div>
          <UserInfo user={user} />
        </div>
        <div>
          <PhoneCard>Test</PhoneCard>
        </div>
      </div>
    </div>
  );
};

export default Profile;

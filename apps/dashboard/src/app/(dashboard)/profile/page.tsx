"use client";
import React from "react";
import s from "./profile.module.scss";
import UserCard from "@/components/ui/cards/UserCard";
import useSessionStore from "@/store/session";
import { redirect } from "next/navigation";
import { Route } from "@/enums/navigation";
import UserInfo from "@/components/user/UserInfo";
import PhoneCard from "@/components/ui/cards/PhoneCard";

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
            <UserCard user={user} />
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

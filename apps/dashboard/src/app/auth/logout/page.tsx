"use client";
import React, { useEffect, useState } from "react";
import s from "./logout.module.scss";
import { Loader } from "@mantine/core";
import { signOut } from "next-auth/react";
import { Route } from "@/enums/navigation";
import LogoutButton from "@/components/auth/LogoutButton";
import { useProfileStore } from "@/store/profile";

const Logout = () => {
  const profileStore = useProfileStore();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    signOut({ redirect: true, callbackUrl: Route.LOGIN })
      .then(() => {
        profileStore.reset();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={s.logout}>
      {isLoading ? <Loader color="blue" /> : <LogoutButton />}
    </div>
  );
};

export default Logout;

"use client";
import React from "react";
import Login from "@/components/auth/SignIn";
import useSessionStore from "@/store/session";
import { redirect } from "next/navigation";
import { publicConfig } from "@/config";

const LoginPage = () => {
  const { user } = useSessionStore();
  if (user) {
    redirect(publicConfig.dashHost);
  }

  return (
    <div className="container">
      <Login />
    </div>
  );
};

export default LoginPage;

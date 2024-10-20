"use client";
import React from "react";
import Login from "@/components/auth/SignIn";
import useSessionStore from "@/store/session";
import { redirect } from "next/navigation";
import { Route } from "@/enums/navigation";

const LoginPage = () => {
  const { user } = useSessionStore();
  if (user) {
    redirect(Route.PROFILE);
  }

  return (
    <div className="container">
      <Login />
    </div>
  );
};

export default LoginPage;

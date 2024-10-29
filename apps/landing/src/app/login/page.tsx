"use client";
import React from "react";
import Login from "@/components/auth/SignIn";
import { redirect } from "next/navigation";
import { Route } from "@/enums/navigation";
import { useSession } from "next-auth/react";

const LoginPage = () => {
  const session = useSession();
  if (!session) {
    redirect(Route.LOGIN);
  }

  return (
    <div className="container">
      <Login />
    </div>
  );
};

export default LoginPage;

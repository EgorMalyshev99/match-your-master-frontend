"use client";
import { redirect } from "next/navigation";
import { Route } from "@/enums/navigation";
import useSessionStore from "@/store/session";

export default function Home() {
  const { user } = useSessionStore();

  if (user) {
    redirect(Route.PROFILE);
  } else {
    redirect(Route.LOGIN);
  }
}

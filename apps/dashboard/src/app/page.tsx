import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Route } from "@/enums/navigation";

export default async function Home() {
  const session = await auth();
  if (session) {
    redirect(Route.PROFILE);
  } else {
    redirect(Route.LOGIN);
  }
}

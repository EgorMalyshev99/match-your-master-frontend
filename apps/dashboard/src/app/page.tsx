import { redirect } from "next/navigation";
import { Route } from "@/enums/navigation";

export default function Home() {
  redirect(Route.PROFILE);
}

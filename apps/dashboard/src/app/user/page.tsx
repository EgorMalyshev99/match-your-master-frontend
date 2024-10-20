import { redirect } from "next/navigation";
import { Route } from "@/enums/navigation";

const User = () => {
  redirect(Route.PROFILE);
};

export default User;

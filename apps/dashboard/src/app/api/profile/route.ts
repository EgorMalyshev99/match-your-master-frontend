import { useLaravelApi } from "@/lib/axiosInstance";
import { publicConfig } from "@/config";
import { LARAVEL_API_PATHS } from "@/constants/routes";
import { userSchema } from "@/models/user";
import { NextResponse } from "next/server";
import { Route } from "@/enums/navigation";

export async function GET(req: Request) {
  const api = await useLaravelApi();
  if (!api) {
    return NextResponse.redirect(new URL(Route.LOGOUT, req.url));
  }

  try {
    const res = await api(
      `${publicConfig.apiHost}${LARAVEL_API_PATHS.userProfile}`,
    );
    const data = userSchema.parse(res.data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}

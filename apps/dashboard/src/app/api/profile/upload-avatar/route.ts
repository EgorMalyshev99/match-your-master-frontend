import { useLaravelApi } from "@/lib/axiosInstance";
import { NextRequest, NextResponse } from "next/server";
import { LARAVEL_API_PATHS } from "@/constants/routes";
import { Route } from "@/enums/navigation";
import { updateUserAvatarResponseSchema } from "@/models/user";

export async function POST(req: NextRequest) {
  const api = await useLaravelApi();
  if (!api) {
    return NextResponse.redirect(new URL(Route.LOGOUT, req.url));
  }

  try {
    const requestData = await req.formData();
    const response = await api.post(
      LARAVEL_API_PATHS.postUserAvatar,
      requestData,
    );

    const data = updateUserAvatarResponseSchema.parse(response.data);
    return NextResponse.json({ success: true, data: data.data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}

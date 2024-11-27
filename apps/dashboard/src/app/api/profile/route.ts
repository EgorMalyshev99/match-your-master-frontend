import { useServerApi } from "@/lib/axiosInstance";
import { publicConfig } from "@/config";
import { API_PATHS } from "@/constants/routes";
import { userSchema } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const api = await useServerApi();
  if (!api) {
    return NextResponse.json({ success: false, error: "Unauthorized" });
  }

  try {
    const res = await api(`${publicConfig.apiHost}${API_PATHS.userProfile}`);
    const data = userSchema.parse(res.data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}

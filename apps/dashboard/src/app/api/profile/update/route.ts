import { useLaravelApi } from "@/lib/axiosInstance";
import { NextRequest, NextResponse } from "next/server";
import { API_PATHS } from "@/constants/routes";
import { postResponseSchema } from "@/models/common";

export async function PUT(req: NextRequest) {
  const api = await useLaravelApi();
  if (!api) {
    return NextResponse.json({ success: false, error: "Unauthorized" });
  }

  try {
    const requestData = await req.json();
    const response = await api.put(API_PATHS.userProfileUpdate, requestData);

    const data = postResponseSchema.parse(response.data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}

import { authApi } from "@/lib/axiosInstance";
import { NextRequest, NextResponse } from "next/server";
import { API_PATHS } from "@/constants/routes";
import { postResponseSchema } from "@/models/common";
import { getCookiesFromResponse, getCookieValue } from "@/lib/cookie";

export async function POST(req: NextRequest) {
  try {
    const csrfResponse = await authApi.get(API_PATHS.csrf);
    const cookies = getCookiesFromResponse(csrfResponse);
    const xsrfTokenCookie = getCookieValue(cookies, "XSRF-TOKEN");
    const sessionTokenCookie = getCookieValue(
      cookies,
      "match_your_master_session",
    );
    const requestData = await req.json();
    const response = await authApi.post(API_PATHS.signup, requestData, {
      headers: {
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": xsrfTokenCookie?.value,
        Cookie: `match_your_master_session=${sessionTokenCookie?.value}`,
      },
    });

    const data = postResponseSchema.parse(response.data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error, status: 500 });
  }
}

import { useServerApi } from "@/lib/axiosInstance";
import { NextRequest } from "next/server";
import { API_PATHS } from "@/constants/routes";
import { postResponseSchema } from "@/models/common";

export async function PUT(req: NextRequest) {
  const requestData = await req.json();

  try {
    const response = await useServerApi({ req }).put(
      API_PATHS.userProfileUpdate,
      requestData,
    );

    const data = postResponseSchema.parse(response.data);
    return Response.json(data);
  } catch (error) {
    console.error(error);
  }
}

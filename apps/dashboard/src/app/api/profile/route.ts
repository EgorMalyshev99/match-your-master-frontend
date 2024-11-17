import { useServerApi } from "@/lib/axiosInstance";
import { NextRequest } from "next/server";
import { publicConfig } from "@/config";
import { API_PATHS } from "@/constants/routes";
import { userSchema } from "@/models/user";

export async function GET(req: NextRequest) {
  const api = useServerApi({ req });
  try {
    const res = await api(`${publicConfig.apiHost}${API_PATHS.userProfile}`);
    const data = userSchema.parse(res.data);
    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error: error });
  }
}

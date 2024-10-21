import { publicConfig } from "@/config";
import { API_PATHS } from "@/enums/api";
import { TestResponse } from "@/models/test";

export const getTest = async (): Promise<TestResponse> => {
  const response = await fetch(`${publicConfig.apiHost}/${API_PATHS.test}`);
  return await response.json();
};

import { RegisterRequest, User } from "@/types";
import { nextApi } from "./api";

export const register = async (data: RegisterRequest) => {
  const res = await nextApi.post<User>("/auth/register", data);
  return res.data;
};

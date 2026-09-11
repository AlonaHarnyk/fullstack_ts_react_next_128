import {
  CheckSessionRequest,
  LoginRequest,
  RegisterRequest,
  User,
} from "@/types";
import { nextApi } from "./api";

export const register = async (data: RegisterRequest) => {
  const res = await nextApi.post<User>("/auth/register", data);
  return res.data;
};

export const login = async (data: LoginRequest) => {
  const res = await nextApi.post<User>("/auth/login", data);
  return res.data;
};

export const checkSession = async () => {
  const res = await nextApi.get<CheckSessionRequest>("/auth/session");
  return res.data.success;
};

export const getMe = async () => {
  const { data } = await nextApi.get<User>("/auth/me");
  return data;
};

export const logout = async (): Promise<void> => {
  await nextApi.post("/auth/logout");
};

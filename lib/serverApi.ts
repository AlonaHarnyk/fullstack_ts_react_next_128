import { cookies } from "next/headers";
import { nextApi } from "./api";
import { User } from "@/types";

export const checkServerSession = async () => {
  // Дістаємо поточні cookie
  const cookieStore = await cookies();
  const res = await nextApi.get("/auth/session", {
    headers: {
      // передаємо кукі далі
      Cookie: cookieStore.toString(),
    },
  });
  // Повертаємо повний респонс, щоб proxy мав доступ до нових cookie
  return res;
};

export const getServerMe = async (): Promise<User> => {
  const cookieStore = await cookies();
  const { data } = await nextApi.get("/auth/me", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
};

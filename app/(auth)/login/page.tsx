"use client";

import { login } from "@/lib/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { LoginRequest } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const setUser = useAuthStore((state) => state.setUser);

  const handleSubmit = async (formData: FormData) => {
    try {
      // Типізуємо дані форми
      const formValues = Object.fromEntries(formData) as LoginRequest;
      // Виконуємо запит
      const res = await login(formValues);
      // Виконуємо редірект або відображаємо помилку
      if (res) {
        setUser(res);
        router.push("/profile");
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    }
  };

  return (
    <>
      <form action={handleSubmit}>
        <h1>Sign in</h1>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button type="submit">Log in</button>
      </form>
      {isError && <p>Something went wrong!</p>}
    </>
  );
};

export default Login;

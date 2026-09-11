"use client";

import Link from "next/link";
import { useAuthStore } from "@/lib/store/authStore";
import { logout } from "@/lib/clientApi";
import { useRouter } from "next/navigation";

const AuthNavigation = () => {
  const router = useRouter();
  // Отримуємо поточну сесію та юзера
  const { isAuthenticated, user, clearIsAuthenticated } = useAuthStore();

  const handleLogout = async () => {
    // Викликаємо logout
    await logout();
    // Чистимо глобальний стан
    clearIsAuthenticated();
    // Виконуємо навігацію на сторінку авторизації
    router.push("/login");
  };

  // Якщо є сесія - відображаємо Logout та інформацію про користувача
  // інакше - посилання на логін та реєстрацію
  return isAuthenticated ? (
    <li>
      <p>{user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </li>
  ) : (
    <>
      <li>
        <Link href="/login">Login</Link>
      </li>
      <li>
        <Link href="/register">Sign up</Link>
      </li>
    </>
  );
};

export default AuthNavigation;

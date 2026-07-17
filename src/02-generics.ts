/**
 * Узагальнені типи (generics)
 */

/* ---------- 1. Базова generic-функція ---------- */

// const logger1 = <T>(value: T): void => {
//   console.log(value);
// };

// logger1<number>(5);
// logger1<string>("test");
// logger1<boolean>(true);

// const logger2 = <T, Y>(value1: T, value2: Y): void => {
//   console.log(value1);
//   console.log(value2);
// };

// logger2<number, string>(5, "test");

/* ---------- 2. Generics з масивами ---------- */
// function firstElement<T>(arr: T[]): T {
//   return arr[0];
// }

// const firstNum = firstElement<number>([10, 20, 30]);
// const firstStr = firstElement<string>(["Alice", "Bob"]);
// console.log(firstNum, firstStr);

/* ---------- 3. Дженерик інтерфейс: узагальнений тип API відповіді ---------- */
// interface Todo {
//   id: number;
//   title: string;
// }

// interface ApiResponse<T> {
//   status: number;
//   message: string;
//   data: T;
// }

// interface TodosResponse {
//   data: Todo[];
//   status: number;
//   message: string;
// }

// const todosResponse: ApiResponse<Todo[]> = {
//   data: [
//     { id: 1, title: "Learn generics" },
//     { id: 2, title: "Learn enums" },
//   ],
//   status: 200,
//   message: "Success!",
// };

// interface OneTodoResponse {
//   data: Todo;
//   status: number;
//   message: string;
// }

// const oneTodoResponse: ApiResponse<Todo> = {
//   data: { id: 1, title: "Learn generics" },
//   status: 200,
//   message: "Success!",
// };

// interface OneTodoImageResponse {
//   data: string;
//   status: number;
//   message: string;
// }

// const oneTodoImageUrlResponse: ApiResponse<string> = {
//   data: "https://i.imgur.com/OvMZBs9.jpeg",
//   status: 200,
//   message: "Success!",
// };

/* ---------- 3. Обмеження ---------- */

// interface Teacher {
//   name: string;
//   students: string[];
// }

// interface Student {
//   name: string;
//   teacher: string;
// }

// function createHelloMessage<T extends { name: string }>(user: T): void {
//   console.log(`Hello, ${user.name}!`);
// }

// createHelloMessage<Teacher>({ name: "Olha", students: ["Ann", "John"] });
// createHelloMessage<Student>({ name: "Ann", teacher: "Olha" });

// function logLength<T extends { length: number }>(value: T): void {
//   console.log(value.length);
// }

// logLength([1, 2]);
// logLength("test");
// // logLength(5); // error

/* ---------- 3. Практика ---------- */

// function saveToLocalStorage<T>(key: string, value: T): void {
//   localStorage.setItem(key, JSON.stringify(value));
// }

// saveToLocalStorage("number", 5);

// function getFromLocalStorage<T>(key: string): T | null {
//   const value = localStorage.getItem(key);
//   if (value !== null) {
//     return JSON.parse(value);
//   }
//   return null;
// }

// getFromLocalStorage<number>("number");

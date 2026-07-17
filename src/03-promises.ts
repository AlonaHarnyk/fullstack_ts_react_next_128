/**
 * Типізація промісів
 *
 * Явна типізація `Promise<T>` і використання `.then` з типізованими результатами
 */

/* ---------- 1. Promise<> ---------- */
const getData = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello, TypeScript!"), 3000);
  });
};
// console.log(getData());
// getData().then((data) => console.log(data));
// getData().then(console.log);

/* ---------- 2. Promise<T> з об'єктом ---------- */
// interface User {
//   id: number;
//   name: string;
// }

// const getUser = (): Promise<User> => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ id: 1, name: "Alice" }), 300);
//   });
// };

// getUser().then(console.log);

/* ---------- 3. Promise<T> з масивом об'єктів ---------- */

// const getUsers = (): Promise<User[]> => {
//   return new Promise((resolve) => {
//     setTimeout(
//       () =>
//         resolve([
//           { id: 1, name: "Alice" },
//           { id: 2, name: "Bob" },
//         ]),
//       300,
//     );
//   });
// };

// getUsers().then(console.log);

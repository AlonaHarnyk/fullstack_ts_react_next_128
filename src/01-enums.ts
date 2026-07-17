/**
 * Перелічення (enum) - це список іменованих констант, які можна використовувати як значення, а не тип.
 *
 * - Union type (наприклад: "pending" | "fulfilled") - легший і часто кращий вибір,
 *   якщо вам потрібен тільки набір допустимих типів.
 * - Enum створює реальний об'єкт в рантаймі (корисно для значень, які
 *   потрібно перевіряти або передавати як значення в коді).
 *
 * Правило: якщо не потрібен runtime-об'єкт - візьміть union type.
 */

/* ---------- 1. Union type vs Enum (строкові значення) ---------- */
// Рекомендується починати з union type:
// type StatusUnion = "pending" | "fulfilled" | "rejected";

// // Якщо потрібен runtime-об'єкт (наприклад для перебору або передачі в коді):
// enum StatusEnum {
//   Pending = "pending",
//   Fulfilled = "fulfilled",
//   Rejected = "rejected",
// }
// console.log(StatusEnum);

// // Використання union type (тип лише для перевірки компілятором):
// let s1: StatusUnion = "pending";
// s1 = "fulfilled";
// // console.log(StatusUnion); error

// // Використання enum (є значення в runtime):
// let s2: StatusEnum = StatusEnum.Rejected;

// console.log(s2); // => "pending"

/* ---------- 2. Numeric enums ---------- */
// enum HTTPCode {
//   Success = 200,
//   Created = 201,
//   BadRequest = 400,
//   ServerError = 500,
// }

// console.log(HTTPCode);
// console.log(Object.keys(HTTPCode));

// const code: HTTPCode = HTTPCode.Success;
// console.log(code);
// console.log(HTTPCode[200]);

/* ---------- 3. String enums (стабільні і зрозумілі) ---------- */
// enum Role {
//   Admin = "admin",
//   User = "user",
//   Guest = "guest",
// }

// console.log(Role);
// console.log(Object.keys(Role));
// console.log(Object.values(Role));
// console.log(Role["admin"]); // undefined

// interface User {
//   username: string;
//   role: Role; // використовуємо enum як тип і як значення
// }

// const user: User = {
//   username: "jacob",
//   role: Role.Admin,
// };

/* ---------- 4. Enums in switch/case ---------- */

// function createGreetMessage(role: Role, name: string): string {
//   switch (role) {
//     case Role.Admin:
//       return `Hello, admin ${name}`;
//     case Role.Guest:
//       return `Hello, guest ${name}`;
//     case Role.User:
//       return `Hello ${name}`;
//   }
// }

// createGreetMessage(Role.Admin, "John");

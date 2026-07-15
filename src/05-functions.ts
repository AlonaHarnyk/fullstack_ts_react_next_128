/**
 * - Типізація функцій
 * - Типізація аргументів
 * - Тип значення, яке повертає функція
 * - Опціональні параметри
 * - Типізація методів
 */

/***************** 1 *****************/

// function add(a: number, b: number): number {
//   return a + b;
// }

// const add = (a: number, b: number): number => a + b;

// const sum = add(1, 2);

/***************** 2 *****************/

// function add1(a: number, b: number): void {
//   console.log(a + b);
// }

// add1(1, 2);

/***************** 3 *****************/
// interface UserElement {
//   username: string;
//   age: number;
// }

// const userCollection: UserElement[] = [
//   { username: "poly", age: 20 },
//   { username: "jacob", age: 30 },
//   { username: "mango", age: 25 },
// ];

// function getUserNames(users: UserElement[]) {
//   return users.map((user) => user.username);
// }

// const names = getUserNames(userCollection);

// /***************** 4 *****************/
// function greet(username: string, age?: number) {
//   if (age !== undefined) {
//     console.log(`Hello, ${username}, who is ${age} years old`);
//   } else {
//     console.log(`Hello, ${username}`);
//   }
// }

// greet("poly", 15);

// greet("jacob");

/***************** 5 *****************/
// interface User {
//   username: string;
//   greet: (message: string) => void;
// }

// const jacob: User = {
//   username: "Jacob",
//   greet(message) {
//     console.log(message);
//   },
//   // greet: (message) => {
//   //   console.log(message);
//   // }
// };

// jacob.greet("Welcome");

/***************** 6 *****************/
interface Player {
  username: string;
  isOnline: boolean;
}

const allPlayers: Player[] = [
  { username: "poly", isOnline: false },
  { username: "jacob", isOnline: true },
  { username: "adrian", isOnline: false },
];

interface GamePlatform {
  getOnlinePlayers: (players: Player[]) => Player[];
  getPlayerNames: (players: Player[]) => string[];
}

const platform: GamePlatform = {
  getOnlinePlayers(players) {
    // return players.filter((player) => player.isOnline === true);
    return players.filter((player) => player.isOnline);
  },
  getPlayerNames(players) {
    return players.map((player) => player.username);
  },
};

platform.getOnlinePlayers(allPlayers);
platform.getPlayerNames(allPlayers);

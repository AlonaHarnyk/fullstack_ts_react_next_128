/**
 * - Типізація масивів: тип[] та Array<тип>
 * - Підказки методів та властивостей
 * - Типізація масиву об'єктів
 */

/***************** 1 *****************/
const planets: string[] = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

// const planets: Array<string> = [
//   "Mercury",
//   "Venus",
//   "Earth",
//   "Mars",
//   "Jupiter",
//   "Saturn",
//   "Uranus",
//   "Neptune",
// ];

/***************** 2 *****************/
interface Order {
  email: string;
  total: number;
}

const orders: Order[] = [
  { email: "j.mercer@mail.com", total: 120 },
  { email: "emily.watts@mail.com", total: 85 },
  { email: "liam.smith@mail.com", total: 200 },
  { email: "sophia.jones@mail.com", total: 150 },
  { email: "noah.brown@mail.com", total: 95 },
];

const emails = orders.map((order) => order.email);

/***************** 3 *****************/

const names: string[] = ["Alice", "Bob"];

// I
const name = names[5];

if (name) {
  name.toUpperCase();
}

// II
console.log(names[5]?.toUpperCase());

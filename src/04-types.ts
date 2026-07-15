/**
 * - Union
 * - Літеральні типи
 */

/***************** 1 *****************/
// type ArrayElement = string | number | boolean;
// const arr: ArrayElement[] = ["1", 2, true, "3", 4, 5];

// const arr1: (string | number)[] = [1, "2"];

/***************** 2 *****************/
// "pending", "shipped", "delivered", "canceled"
// type Status = "pending" | "shipped" | "delivered" | "canceled";
// let status: Status = "pending";
// status = "shipped";
// status = "delivered";

/***************** 3 *****************/
// delivery: "drone", "courier", "pickup"
// deliveryTime: "morning", "afternoon", "evening"

type DeliveryTime = "morning" | "afternoon" | "evening";

interface Order {
  username: string;
  email: string;
  total: number;
  delivery: "drone" | "courier" | "pickup";
  deliveryTime: DeliveryTime;
  status: string;
}

const order: Order = {
  username: "Jacob",
  email: "j.mercer@mail.com",
  total: 120,
  delivery: "courier",
  deliveryTime: "afternoon",
  status: "shipped",
};

order.delivery = "drone";
order.deliveryTime = "evening";

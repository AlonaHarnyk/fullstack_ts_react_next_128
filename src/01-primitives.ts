/**
 * - Прості типи: any, number, string, boolean, null, undefined
 * - Виведення типів (type inference)
 */

let a: number = 5;

a = 10;

let b: string = "a";

let c: boolean = true;

let d: null = null;

let e: undefined = undefined;

let f: any;

f = 5;
f = "a";
f = true;

f.toUpperCase();

let g: unknown;

g = 5;
g = "a";
g = true;

if (typeof g === "string") {
  g.toUpperCase();
}

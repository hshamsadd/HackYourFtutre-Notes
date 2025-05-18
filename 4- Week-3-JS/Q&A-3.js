// const x = 1

// const scope1 = () => console.log(x)

// function scope2() {
//     const y = 7
//     console.log(y)
// }

// scope1()
// scope2()

// let x = 4;

// function double(x) {
//   return x * 2;
// }

// x = double(4);
// console.log(x)

// let x = 4;

// /////////////////

// const add = (b) => x + b;

// //closure
// function closure(b) {
//   const x = 4;
//   function add(x) {
//     return b + 2;
//   }
//   //    return add2()
// }

// const addition = add2();
// addition(5); //

// const student = {
//   name: "Hassan",
//   age: 33,
//   class: "cohort53",
//   addScore: function () {
//     return this.name + this.age + this.class;
//   },
// };

// const student1 = [
//   "Hassan",
//   age,
//   function () {
//     return this.age + this.class;
//   },
// ];

// let arr = [];
// let sixDiceValue;

// for (let i = 0; i < 10; i++) {
//   sixDiceValue = Math.floor(1 + 6 * Math.random());
//   arr[--sixDiceValue]++;
// }

// console.log(arr); // undefined

//
// const pets = ["🐶", "🐶", "🐶", "🐶", "🐶"];
// pets.map((pet) => "🐱"); // ["🐱", "🐱", "🐱", "🐱", "🐱"]
// //

// //
// const pets = ["🐶", "🐶", "🐱", "🐶", "🐱"];
// pets.filter((pet) => pet === "🐱"); // ["🐱", "🐱"]
// //

// //
// const pets = ["🐶", "🐶", "🐱", "🐶", "🐱"];
// pets.every((pet) => pet === "🐱"); // false
// //

// //
// const pets = ["🐶", "🐶", "🐱", "🐶", "🐱"];
// pets.some((pet) => pet === "🐱"); // true
// //

// //
// const pets = ["🐶", "🐶", "🐶", "🐶", "🐶"];
// // Fills the specified index with "🐱" up to the last index.
// pets.fill("🐱", 3); // ["🐶", "🐶", "🐶", "🐱", "🐱"]
// //

// //
// const pets = ["🐶", "🐶", "🐱", "🐶", "🐱"];
// // If you want to find the index of first occurrence of "🐱"
// pets.findIndex((el) => el === "🐱"); // 4
// //

// //
// const pets = ["🐶", "🐶", "🐱", "🐶", "🐱"];
// // If you want to find the first occurrence of "🐱"
// pets.find((pet) => pet === "🐱"); // "🐱"
// //

// pets.map((pet) => "🐱"); // ['🐱', '🐱', '🐱', '🐱', '🐱']
// pets.filter((pet) => pet === "🐱"); // []
// pets.every((pet) => pet === "🐶"); // true
// pets.some((pet) => pet === "🐱"); // false
// pets.fill("🐱", 3); // ['🐶', '🐶', '🐶', '🐱', '🐱']
// // Fills the specified index with "🐱" up to the last index.
// pets.findIndex((el) => el === "🐱"); //
// pets.find((pet) => pet === "🐱"); // '🐱'

const ingredients = ["🫓", "🥬", "🍅", "🧀", "🥩", "🫓"];
const pets = ["🐶", "🐶", "🐶", "🐶", "🐶"];

// 1. map: returns new array replacing each item with "🐱"
pets.map((pet) => "🐱");
// ['🐱', '🐱', '🐱', '🐱', '🐱'] ✅ no change to original

// 2. filter: returns items that match "🐱" if found. (not found)
pets.filter((pet) => pet === "🐱");
// [] ✅ no change to original

// 3. every: checks if all are "🐶"
pets.every((pet) => pet === "🐶");
// true ✅ no change to original

// 4. some: checks if at least one is "🐱"
pets.some((pet) => pet === "🐱");
// false ✅ no change to original

// 5. fill: replaces from index 3 to end with "🐱"
pets.fill("🐱", 3);
// ['🐶', '🐶', '🐶', '🐱', '🐱'] ❌ mutates original

// 6. includes: checks if array has "🐱"
pets.includes("🐱");
// true ✅ no change to original (after fill)

// 7. findIndex: gets index of first "🐱" (not found)
pets.findIndex((el) => el === "🐱");
// 3 ✅ no change to original

// 8. find: returns first instance of "🐱"
pets.find((pet) => pet === "🐱");
// '🐱' ✅ no change to original

// 9.  checks each index (i), and only on the last iteration, it pushes "🦆" into the original array, modifying it.
pets.forEach((pet, i, arr) => {
  if (i === arr.length - 1) arr.push("🦆");
});
// ['🐶', '🐶', '🐶', '🐱', '🐱', '🦆'] ❌ mutates original

// 10. count how many
const burgerStack = ingredients.reduce((acc, currVal) => acc + currVal); // builds 🫓🥬🍅🧀🥩🫓
const burger = burgerStack === "🫓🥬🍅🧀🥩🫓" ? "🍔" : burgerStack;
console.log(burger); // 🍔

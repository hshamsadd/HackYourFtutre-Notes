```js
const ingredients = ["🫓", "🥬", "🍅", "🧀", "🥩", "🫓"];
const pets = ["🐶", "🐶", "🐶", "🐶", "🐶"];
```
1. (Map): returns new array replacing each item with "🐱"
```js
pets.map((pet) => "🐱");
// ['🐱', '🐱', '🐱', '🐱', '🐱'] ✅ no change to original
```

2. (Filter): returns items that match "🐱" if found. (not found)
```
pets.filter((pet) => pet === "🐱");
// [] ✅ no change to original
```
3. (Every): checks if all are "🐶"
```
pets.every((pet) => pet === "🐶");
// true ✅ no change to original
```
5. (Some): checks if at least one is "🐱"
```
pets.some((pet) => pet === "🐱");
// false ✅ no change to original
```
7. (Fill): replaces from index 3 to end with "🐱"
```
pets.fill("🐱", 3);
// ['🐶', '🐶', '🐶', '🐱', '🐱'] ❌ mutates original
```
9. (Includes): checks if array has "🐱"
```
pets.includes("🐱");
// true ✅ no change to original (after fill)
```
10. (FindIndex): gets index of first "🐱" (not found)
```
pets.findIndex((el) => el === "🐱");
// 3 ✅ no change to original
```
8. (Find): returns first instance of "🐱"
```
pets.find((pet) => pet === "🐱");
// '🐱' ✅ no change to original
```
9.  checks each index (i), and only on the last iteration, it pushes "🦆" into the original array, modifying it.
```
pets.forEach((pet, i, arr) => {
  if (i === arr.length - 1) arr.push("🦆");
});
// ['🐶', '🐶', '🐶', '🐱', '🐱', '🦆'] ❌ mutates original
```
| Iteration | Index (`i`) | Condition `i === arr.length - 1` | Action Taken              | Array State After Modification         |
|-----------|------------|-----------------------------------|---------------------------|--------------------------------------- |
| 1         | 0          | `0 === 4` → `false`               | None                      | `["🐶","🐶","🐶","🐱","🐱"]`        |
| 2         | 1          | `1 === 4` → `false`               | None                      | `["🐶","🐶","🐶","🐱","🐱"]`        |
| 3         | 2          | `2 === 4` → `false`               | None                      | `["🐶","🐶","🐶","🐱","🐱"]`        |
| 4         | 3          | `3 === 4` → `false`               | None                      | `["🐶","🐶","🐶","🐱","🐱"]`        |
| 5         | 4          | `4 === 4` → `true`                | `arr.push("🦆")` executes | `["🐶","🐶","🐶","🐱","🐱","🦆"]`  |

10. (Reduce) to count how many and give the total

```
const burgerStack = ingredients.reduce((acc, currVal) => acc + currVal); // returns an array with one value of 🫓🥬🍅🧀🥩🫓
const burger = burgerStack === "🫓🥬🍅🧀🥩🫓" ? "🍔" : burgerStack;
console.log(burger); // 🍔
```
| Step | acc              | currVal | operation               | result             |
|------|------------------|---------|--------------------------|--------------------|
| 1    | 🫓               | 🥬      | 🫓 + 🥬                  | 🫓🥬                |
| 2    | 🫓🥬             | 🍅      | 🫓🥬 + 🍅                | 🫓🥬🍅              |
| 3    | 🫓🥬🍅           | 🧀      | 🫓🥬🍅 + 🧀              | 🫓🥬🍅🧀            |
| 4    | 🫓🥬🍅🧀         | 🥩      | 🫓🥬🍅🧀 + 🥩            | 🫓🥬🍅🧀🥩          |
| 5    | 🫓🥬🍅🧀🥩       | 🫓      | 🫓🥬🍅🧀🥩 + 🫓          | 🫓🥬🍅🧀🥩🫓        |
| ✅   | Final Check      |         | is it a burger?          | 🍔                 |

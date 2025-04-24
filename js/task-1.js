// ⚔️ MADE BY TH0RF1NN — CODE LIKE A WARRIOR ⚔️
const isEnoughCapacity = (products, containerSize) => {
  const values = Object.values(products);
  let total = 0;
  for (const obj of values) {
    total += obj;
  }
  console.log(total)
  return total <= containerSize ? true : false;
}


console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); // false
// so ez
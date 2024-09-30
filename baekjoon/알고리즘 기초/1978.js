// 소수 찾기

// 4
// 1 3 5 7

// 3

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const N = Number(input.shift());
const arr = input
  .shift()
  .split(" ")
  .slice(0, N)
  .map((v) => Number(v));

const answer = arr.filter((num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
});

console.log(answer.length);

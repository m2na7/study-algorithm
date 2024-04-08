// 최소공배수

// 3
// 1 45000
// 6 10
// 13 17

// 45000
// 30
// 221

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const len = Number(input.shift());
let answer = [];

for (let i = 0; i < len; i++) {
  let [a, b] = input[i].split(" ").map((v) => Number(v));
  let num1 = a;
  let num2 = b;

  while (a % b !== 0) {
    let r = a % b;

    if (r !== 0) {
      a = b;
      b = r;
    }
  }

  let min = (num1 * num2) / b;
  answer.push(min);
}

console.log(answer.join("\n"));

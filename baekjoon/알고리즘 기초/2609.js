// 최대공약수와 최소공배수

// 24 18

// 6
// 72

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

while (a % b !== 0) {
  let r = a % b;

  if (r !== 0) {
    a = b;
    b = r;
  }
}

console.log(b);
// 두 수의 곱을 최대공약수로 나누면 -> 최대공배수
console.log((input[0] * input[1]) / b);

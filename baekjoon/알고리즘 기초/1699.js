// 제곱수의 합

// 7
// 4

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

const N = Number(input);
const DP = [];

for (let i = 0; i <= N; i++) DP[i] = i;

for (let i = 0; i <= N; i++) {
  for (let j = 1; j <= Math.sqrt(i); j++) {
    DP[i] = Math.min(DP[i], DP[i - j ** 2] + 1);
  }
}

console.log(DP[N]);

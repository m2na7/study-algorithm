// 1로 만들기

// 2 -> 1
// 10 -> 3

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

const num = Number(input);
const DP = new Array(num + 1).fill(0);

for (let i = 2; i <= num; i++) {
  DP[i] = DP[i - 1] + 1;

  if (i % 2 === 0) DP[i] = Math.min(DP[i], DP[i / 2] + 1);
  if (i % 3 === 0) DP[i] = Math.min(DP[i], DP[i / 3] + 1);
}

console.log(DP);
console.log(DP[num]);

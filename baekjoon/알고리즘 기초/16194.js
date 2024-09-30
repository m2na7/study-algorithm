// 카드 구매하기2

// 4
// 1 5 6 7

// 4

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const N = Number(input.shift());
const arr = input.shift().split(" ").map(Number);
let dp = [0, ...arr];

for (let i = 2; i < dp.length; i++) {
  for (let j = 1; j < i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j] + dp[j]);
  }
}

console.log(dp[N]);

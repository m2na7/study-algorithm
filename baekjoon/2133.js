// 타일 채우기

// 2

// 3

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(" ");

const n = Number(input);

// n이 홀수면 타일을 채울 수 없다
if (n % 2 !== 0) {
  console.log(0);
}

const dp = new Array(n + 1).fill(0);

dp[0] = 1;
dp[2] = 3;

for (let i = 4; i <= n; i += 2) {
  dp[i] = dp[i - 2] * 3;
  for (let j = 4; j <= i; j += 2) {
    dp[i] += dp[i - j] * 2;
  }
}

console.log(dp[n]);

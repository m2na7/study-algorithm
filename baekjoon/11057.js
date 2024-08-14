// 오르막 수

// 1 -> 10
// 2 -> 55
// 3 -> 220

// 00 이면 55
// 000 이면 55 + 9+8+7+6+5+4+3+2+1 + 8+7+6+5+4+3+2+1 + 7+6+5+4+3+2+1 + 6+5+4+3+2+1 + 5+4+3+2+1 + 4+3+2+1 + 3+2+1 + 2+1 + 1
// 111 112 113 114 ... 9
// 122 123 124 125 ... 8
// 222 223 224 225 ... 8

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

const N = Number(input);
const dp = [[], new Array(10).fill(1)];

for (let i = 2; i <= N; i++) {
  dp[i] = [];
  dp[i][0] = dp[i - 1][0] % 10007;
  for (let j = 1; j < 10; j++) {
    dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 10007;
  }
}

console.log(dp[N].reduce((a, v) => a + v, 0) % 10007);

// 동물원

// 4

// 41

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

const N = Number(input);

const dp = [];
dp[0] = 0;
dp[1] = 3;
dp[2] = 7;
dp[3] = 17;

for (let i = 4; i <= N; i++) {
  dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
}

console.log(dp[N] % 9901);

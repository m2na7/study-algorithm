// RGB거리

// 3
// 26 40 83
// 49 60 57
// 13 89 99

// 96

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const [N, ...arr] = input.map((v) => v.split(" ").map(Number));

const dp = arr;

for (let i = 1; i < N; i++) {
  dp[i][0] = dp[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] = dp[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
  dp[i][2] = dp[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
}

console.log(Math.min(...dp[N - 1]));

// 포도주 시식

// 6
// 6
// 10
// 13
// 9
// 8
// 1

// 33

let fs = require("fs");
let [n, ...arr] = fs.readFileSync("input.txt").toString().split("\n");

arr = arr.map((v) => parseInt(v));
const dp = new Array(parseInt(n)).fill(0);

dp[1] = arr[0];
dp[2] = arr[0] + arr[1];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 1], // 현재 와인을 마시지 않음
    dp[i - 3] + arr[i - 1] + arr[i - 2],  // 세번째 전 와인과 직전+현재 와인을 마심
    dp[i - 2] + arr[i - 1] // 현재 와인을 마시고, 두번째 와인까지의 최댓값을 더함
  );
}

console.log(dp[n]);

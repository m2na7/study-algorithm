// 가장 긴 감소하는 부분 수열

// 6
// 10 30 10 20 20 10

// 3

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const n = Number(input.shift());
const arr = input.shift().split(" ").map(Number);

const dp = new Array(n).fill(1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] > arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

let maxLen = Math.max(...dp);
console.log(maxLen);

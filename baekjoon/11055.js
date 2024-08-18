// 가장 큰 증가하는 부분 수열

// 10
// 1 100 2 50 60 3 5 6 7 8

// 113

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const n = Number(input.shift());
const arr = input.shift().split(" ").map(Number);

const dp = new Array(n);

for (let i = 0; i < n; i++) {
  dp[i] = arr[i];
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + arr[i]);
    }
  }
     }

let maxSum = Math.max(...dp);
console.log(maxSum);

// 가장 긴 바이토닉 부분 수열

// 10
// 1 5 2 1 4 3 4 5 2 1

// 7

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const n = Number(input.shift());
const arr = input.shift().split(" ").map(Number);

// LIS
const dp_inc = new Array(n).fill(1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      dp_inc[i] = Math.max(dp_inc[i], dp_inc[j] + 1);
    }
  }
}

// LDS
const dp_dec = new Array(n).fill(1);

for (let i = n - 2; i >= 0; i--) {
  for (let j = n - 1; j > i; j--) {
    if (arr[j] < arr[i]) {
      dp_dec[i] = Math.max(dp_dec[i], dp_dec[j] + 1);
    }
  }
}

let maxLen = 0;
for (let i = 0; i < n; i++) {
  maxLen = Math.max(maxLen, dp_inc[i] + dp_dec[i] - 1);
}

console.log(maxLen);

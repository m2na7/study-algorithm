// 연속합 2

// 10
// 10 -4 3 1 5 6 -35 12 21 -1

// 54

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const n = Number(input.shift());
const arr = input.shift().split(" ").map(Number);

// dp1 -> 삭제 하지 않은 경우
// dp2 -> 한 번 삭제한 경우
const dp1 = new Array(n).fill(0);
const dp2 = new Array(n).fill(0);

dp1[0] = arr[0];
dp2[0] = arr[0];

for (let i = 1; i < n; i++) {
  dp1[i] = Math.max(arr[i], dp1[i - 1] + arr[i]);
  dp2[i] = Math.max(dp1[i - 1], dp2[i - 1] + arr[i]); // dp1[i-1] -> 현재 i번째 값을 삭제하는 경우
}

const maxSum = Math.max(...dp1, ...dp2);
console.log(maxSum);

// 연속합

// 10
// 10 -4 3 1 5 6 -35 12 21 -1

// 33

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const N = Number(input.shift());
const arr = input.shift().split(" ").map(Number);
let DP = [arr[0]];

for (let i = 1; i < N; i++) {
  DP[i] = arr[i] > arr[i] + DP[i - 1] ? arr[i] : arr[i] + DP[i - 1];
}

console.log(Math.max(...DP));

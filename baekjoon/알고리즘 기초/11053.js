// 가장 긴 증가하는 부분 수열

// 6
// 10 20 10 30 20 50

// 4

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const N = Number(input.shift());
const arr = input.shift().split(" ").map(Number);

const DP = new Array(N);
DP[0] = 1;

for (let i = 1; i < N; i++) {
  let max = 0;
  for (let j = 0; j <= i; j++) {
    if (arr[j] < arr[i]) max = Math.max(max, DP[j]);
  }
  DP[i] = max + 1;
}

console.log(Math.max(...DP));
console.log(...DP);

// 1, 2, 3 더하기 3

// 3
// 4
// 7
// 10

// 7
// 44
// 274

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const count = input.shift();
const arr = input.map(Number);

const DP = new Array(count + 1).fill(0);
const num = Math.max(...arr);

DP[1] = 1;
DP[2] = 2;
DP[3] = 4;

for (let i = 4; i <= num; i++) {
  DP[i] = (DP[i - 1] + DP[i - 2] + DP[i - 3]) % 1000000009;
}

for (let i = 0; i < count; i++) {
  console.log(DP[arr[i]]);
}

// 이친수

// 3

// 2

let fs = require("fs");
let input = Number(fs.readFileSync("input.txt").toString());

const DP = new Array(input + 1);

DP[1] = 1;
DP[2] = 1;

for (let i = 3; i < DP.length; i++) {
  DP[i] = BigInt(DP[i - 1]) + BigInt(DP[i - 2]);
}

console.log(String(DP[input]));

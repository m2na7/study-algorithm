// 2xn 타일링 2

// 2 -> 3
// 8 -> 171

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

const num = Number(input);
const DP = new Array(num + 1).fill(0);

DP[1] = 1;
DP[2] = 3;

for (let i = 3; i <= num; i++) {
  DP[i] = (DP[i - 1] + DP[i - 2] * 2) % 10007;
}

console.log(DP[num]);

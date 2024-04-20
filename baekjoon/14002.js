// 가장 긴 증가하는 부분 수열 4

// 6
// 10 20 10 30 20 50

// 4
// 10 20 30 50

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const N = Number(input.shift());
const arr = input.shift().split(" ").map(Number);

const DP = new Array(N);
let list = [];

for (let i = 0; i < N; i++) {
  DP[i] = [arr[i]];
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i] && DP[j].length + 1 > DP[i].length) {
      DP[i] = [...DP[j], arr[i]];
    }
  }
  if (DP[i].length > list.length) {
    list = DP[i];
  }
}

console.log(list.length);
console.log(list.join(" "));

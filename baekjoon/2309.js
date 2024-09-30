// 일곱 난쟁이

// 20
// 7
// 23
// 19
// 10
// 15
// 25
// 8
// 13

// 7
// 8
// 10
// 13
// 19
// 20
// 23

let fs = require("fs");
let input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let arr = [];
let sum = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    arr = input.filter((_, idx) => idx !== i && idx !== j); // i, j를 제외한 7명의 난쟁이를 저장
    sum = arr.reduce((acc, cur) => acc + cur, 0);

    if (sum === 100) break;
  }
  if (sum === 100) break;
}

console.log(arr.sort((a, b) => a - b).join("\n"));

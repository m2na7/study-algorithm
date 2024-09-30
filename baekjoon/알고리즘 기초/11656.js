// 접미사 배열

// baekjoon

// aekjoon
// baekjoon
// ekjoon
// joon
// kjoon
// n
// on
// oon

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("");

let arr = [];

for (let i = 0; i < input.length; i++) {
  arr.push(input.slice(i, input.length).join(""));
}

arr.sort();

console.log(arr.join("/n"));

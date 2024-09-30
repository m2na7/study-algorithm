// 오큰수

// 4
// 3 5 2 7

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map((e) => Number(e));

let answer = [];
let stack = [];

for (let i = 0; i < N - 1; i++) {
  for (let j = i + 1; j < N; j++) {
    if (arr[i] < arr[j]) {
      stack.push(arr[j]);
      break;
    }
  }
  if (stack.length) answer.push(stack.pop());
  else answer.push(-1);
}
answer.push(-1);

console.log(answer.join(" "));

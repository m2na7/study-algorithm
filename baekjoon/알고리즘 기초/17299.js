// 오등큰수

// 7
// 1 1 2 3 4 2 1

// -1 -1 1 2 2 1 -1

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const N = Number(input[0]);
input = input[1].split(" ").map((e) => Number(e));

let count = {};
input.forEach((v) => {
  count[v] = (count[v] || 0) + 1;
});

const stack = [];
const answer = new Array(N).fill(-1);
for (let i = 0; i < N; i++) {
  while (
    stack.length > 0 &&
    count[input[i]] > count[input[stack[stack.length - 1]]]
  ) {
    answer[stack.pop()] = input[i];
  }
  stack.push(i);
}

console.log(answer.join(" "));

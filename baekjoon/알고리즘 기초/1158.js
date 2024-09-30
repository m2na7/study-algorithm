// 요세푸스 문제

// 7 3

// <3, 6, 2, 7, 5, 1, 4>

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const [n, k] = input[0].split(" ");

let answer = [];
let queue = [];
let cnt = 0;
for (let i = 0; i < n; i++) queue.push(i + 1);

while (queue.length > 0) {
  cnt++;
  let item = queue.shift();
  if (cnt % k === 0) answer.push(item);
  else queue.push(item);
}

console.log(`<${answer.join(", ")}>`);

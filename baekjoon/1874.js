// 스택 수열

// 8
// 4
// 3
// 6
// 8
// 7
// 5
// 2
// 1

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const [n, ...nums] = input;
const num = nums.map((i) => Number(i));

const stack = [];
let answer = "";
let cnt = 1;

for (let i = 0; i < n; i++) {
  while (cnt <= num[i]) {
    stack.push(cnt++);
    answer += "+ ";
  }

  let item = stack.pop();
  
  if (item !== num[i]) {
    answer = "NO";
    break;
  }

  answer += "- ";
}

console.log(answer.split(" ").join("\n"));

// 쇠막대기

// ()(((()())(())()))(())

// 17

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("");

let stack = [];
let answer = 0;

for (let i in input) {
  if (input[i] === "(") {
    stack.push(input[i]);
  } else {
    // 레이저인 경우 ')' 바로 이전에 '('가 나옴
    // 스택의 길이만큼 막대기가 생긴다.
    if (input[i - 1] === "(") {
      stack.pop();
      answer += stack.length;
    } else {
      stack.pop();
      answer++;
    }
  }
}

console.log(answer);

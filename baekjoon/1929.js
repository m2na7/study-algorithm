// 소수 구하기

// 3 16

// 3
// 5
// 7
// 11
// 13

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(" ");

let n = Number(input[0]);
let m = Number(input[1]);
let answer = [];

// 1은 소수가 아니기 때문에 true로 표시
const prime = { 1: true };

for (let i = 2; i <= Math.ceil(Math.sqrt(m)); i++) {
  if (prime[i]) continue;

  // i의 배수를 모두 소수가 아니라고 표시 (true)
  // 배수는 소수가 당연히 아니다 !
  for (let j = i ** 2; j <= m; j += i) {
    prime[j] = true;
  }
}

for (let i = n; i <= m; i++) {
  if (!prime[i]) answer.push(i);
}

console.log(answer.join("\n"));

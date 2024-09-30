// 스티커

// 2
// 5
// 50 10 100 20 40
// 30 50 70 10 60
// 7
// 10 30 10 50 100 20 40
// 20 40 30 50 60 20 80

// 260
// 290

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let answer = [];
let t = Number(input[0].trim()); 
let index = 1;

for (let i = 0; i < t; i++) {
  let n = Number(input[index].trim());  // 스티커 개수
  let arr = [];

  arr.push(input[index + 1].trim().split(' ').map(Number));  // 첫 번째 줄 스티커 점수
  arr.push(input[index + 2].trim().split(' ').map(Number));  // 두 번째 줄 스티커 점수

  answer.push(sticker(n, arr));
  index += 3;
}

console.log(answer.join('\n'));

function sticker(n, arr) {
  let dp = Array.from({ length: n + 1 }, () => [0, 0]);

  dp[1][0] = arr[0][0];
  dp[1][1] = arr[1][0];

  for (let i = 2; i <= n; i++) {
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 2][1]) + arr[0][i - 1];
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 2][0]) + arr[1][i - 1];
  }

  return Math.max(...dp[n]);
}

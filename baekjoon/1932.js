// 정수 삼각형

// 5
// 7
// 3 8
// 8 1 0
// 2 7 4 4
// 4 5 2 6 5

// 30

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let n = parseInt(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

// 가장 아래층 (4 5 2 6 5) 에서 부터 최댓값을 계산하면서 위층으로 올라감
// 그러기 위해서 가장 아래의 위층 (2 7 4 4) 에서부터 계산을 시작 (+1 해서 가장 아래층에 접근)
for (let i = n - 2; i >= 0; i--) {
  for (let j = 0; j < arr[i].length; j++) {
    arr[i][j] += Math.max(arr[i + 1][j], arr[i + 1][j + 1]);
  }
}

console.log(arr[0][0]);

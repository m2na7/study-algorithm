// RGB거리 2

// 3
// 26 40 83
// 49 60 57
// 13 89 99

// 110

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const N = Number(input[0]);
const arr = input.slice(1).map((line) => line.split(" ").map(Number));

const INF = Infinity;

// 1. 첫번째 집을 firstColor를 정해놓고 각각의 경우에 최솟값을 계산.
function solution(firstColor) {
  const dp = Array.from({ length: N }, () => Array(3).fill(INF));

  dp[0][firstColor] = arr[0][firstColor];

  for (let i = 1; i < N; i++) {
    dp[i][0] = arr[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = arr[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = arr[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
  }

  let result;
   // 2. N번째 집과 첫번째 집의 색이 같지 않도록 함.
  if (firstColor === 0) {
    result = Math.min(dp[N - 1][1], dp[N - 1][2]);
  } else if (firstColor === 1) {
    result = Math.min(dp[N - 1][0], dp[N - 1][2]);
  } else {
    result = Math.min(dp[N - 1][0], dp[N - 1][1]);
  }

  return result;
}

// 3. 첫밴째 집을 3가지 색상으로 칠하는 경우, 그 각각의 최솟값에서 최종 결과를 구함.
const result = Math.min(solution(0), solution(1), solution(2));

console.log(result);

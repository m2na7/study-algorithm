function solution(n) {
  let answer,
    n1 = 1,
    n2 = 2;

  if (n == 1) return n1;
  if (n == 2) return n2;

  for (let i = 3; i <= n; i++) {
    answer = n1 + n2 % 1234567;
    n1 = n2;
    n2 = answer;
  }

  return answer % 1234567;
}

console.log(solution(4)); // 5

// DP 개념 적용

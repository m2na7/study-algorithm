function solution(brown, yellow) {
  var answer = [];
  let sum = brown + yellow;

  for (let h = 3; h <= brown; h++) {
    // 합계를 높이로 나누었을 때 나누어 떨어져야함
    if (sum % h === 0) {
      let w = sum / h; // 가로
      if ((h - 2) * (w - 2) === yellow) return [w, h];
    }
  }
  return answer;
}

// 가로-2 * 세로-2 = yellow
// 최소 세로길이 = 3

console.log(solution(24, 24));

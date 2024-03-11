function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }
  return answer;
}

console.log(solution(8, 4, 7));

// 딱히 n을 활용할 필요성을 못느꼇음
// 게임의 규칙이 2로 나눈다음 올림만 해주면 다음 순서가 결정됐기 때문.
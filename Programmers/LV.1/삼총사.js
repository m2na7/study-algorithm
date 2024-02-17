function solution(number) {
  var answer = 0;
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) answer++;
      }
    }
  }
  return answer;
}

console.log(solution([-2, 3, 0, 2, -5]));

// 조합, DFS 등 활용해서 푸는 방법도 있음

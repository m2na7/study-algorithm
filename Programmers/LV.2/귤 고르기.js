function solution(k, tangerine) {
  let answer = 0;
  const countTangerine = {};

  tangerine.forEach((i) => (countTangerine[i] = (countTangerine[i] || 0) + 1));

  const arr = Object.values(countTangerine).sort((a, b) => b - a);

  for (const i of arr) {
    answer++;
    if (k > i) k -= i;
    else break;
  }
  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));

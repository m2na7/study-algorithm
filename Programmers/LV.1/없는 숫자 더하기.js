function solution(numbers) {
  var answer = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.sort().includes(i)) answer += i;
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));

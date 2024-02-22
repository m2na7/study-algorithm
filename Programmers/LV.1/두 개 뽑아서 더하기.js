function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (i !== j) {
        if (!answer.includes(numbers[i] + numbers[j]))
          answer.push(numbers[i] + numbers[j]);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}

console.log(solution([5, 0, 2, 7]));

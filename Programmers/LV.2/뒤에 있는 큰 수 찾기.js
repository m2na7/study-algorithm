function solution(numbers) {
  let answer = new Array(numbers.length).fill(-1);
  let stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack && numbers[stack.at(-1)] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }

  return answer;
}

console.log(solution([2, 3, 3, 5]));
console.log(solution([9, 1, 5, 3, 6, 2]));

// 초기풀이, 시간초과 (O(n^2))

// function solution(numbers) {
//   let answer = [];

//   for (let i = 0; i < numbers.length; i++) {
//     let flag = false;
//     for (let j = i + 1; j <= numbers.length; j++) {
//       if (numbers[i] < numbers[j]) {
//         answer.push(numbers[j]);
//         flag = true;
//         break;
//       }
//     }

//     if (!flag) answer.push(-1);
//   }

//   return answer;
// }

function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) stack.pop();
    else stack.push(s[i]);
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution("baabaa"));

// 첫 풀이 효율성 테스트 실패함

// function solution(s) {
//   var arr = s.split("");

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === arr[i + 1]) {
//       arr.splice(i, 2);
//       i = -1;
//     }
//   }

//   return arr.length === 0 ? 1 : 0;
// }

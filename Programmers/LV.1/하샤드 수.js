function solution(x) {
  let sum = 0;
  let arr = String(x).split("");

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return x % sum == 0 ? true : false;
}

// 처음 작성한 코드
// function solution(x) {
//   var answer = true;
//   if (!(x % ((x % 10) + Math.floor(x / 10)) === 0)) answer = false;
//   return answer;
// }

console.log(solution(12));

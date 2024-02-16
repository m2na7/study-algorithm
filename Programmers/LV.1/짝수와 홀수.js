function solution(num) {
  var answer = "";
  if (num % 2 === 0) answer += "Even";
  else answer += "Odd";
  return answer;
}
// 다른풀이
// function evenOrOdd(num) {
//     return num % 2 ? "Odd" : "Even"
//   }
function solution(phone_number) {
  let len = phone_number.length;
  let answer = "*".repeat(len - 4) + phone_number.slice(-4);

  return answer;
}

console.log(solution("01099993245"));

// 정규식을 이용한 방법도 있다.
// function hide_numbers(s){
//     return s.replace(/\d(?=\d{4})/g, "*");
//   }

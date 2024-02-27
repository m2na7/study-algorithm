function solution(s) {
  // max, min은 문자열도 가능해서 굳이 숫자로 바꿔줄 필요 없음.
  // var arr = s.split(" ").map(Number);
  var arr = s.split(" ");
  return Math.min(...arr) + " " + Math.max(...arr);
}

console.log(solution("1 2 3 4"));

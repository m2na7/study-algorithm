function solution(s) {
  if (s.length % 2 === 0) {
    var a = s.length / 2 - 1;
    var b = s.length / 2;
    return s[a] + s[b];
  } else {
    var a = Math.floor(s.length / 2);
    return s[a];
  }
}

console.log(solution("abcdde"));

// // 다른 풀이, substr 이용
// function solution(s) {
//     return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
// }
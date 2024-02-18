function solution(s, n) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result += " ";
    } else {
      let code = s.charCodeAt(i);

      // 대문자
      if (code >= 65 && code <= 90) {
        if (code + n > 90) {
          result += String.fromCharCode(code + n - 26);
        } else {
          result += String.fromCharCode(code + n);
        }
      }

      // 소문자
      if (code >= 97 && code <= 122) {
        if (code + n > 122) {
          result += String.fromCharCode(code + n - 26);
        } else {
          result += String.fromCharCode(code + n);
        }
      }
    }
  }

  return result;
}

console.log(solution("a  B  z", 4));

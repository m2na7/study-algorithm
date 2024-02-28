function solution(s) {
    let sum = 0;
  
    if (s[s.length - 1] === "(") return false;
  
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === ")") {
        sum++;
      } else if (s[i] === "(") {
        sum--;
      }
  
      if (sum < 0) return false;
    }
  
    return sum == 0 ? true : false;
  }
  
  console.log(solution("(())()"));
  
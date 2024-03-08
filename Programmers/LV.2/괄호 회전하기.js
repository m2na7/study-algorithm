function solution(s) {
  let arr = s.split("");
  let sum = 0;
  let temp;

  for (let i = 0; i < arr.length; i++) {
    sum += checkBracket(arr.join(""));
    temp = arr.shift();
    arr.push(temp);
  }
  return sum;
}

function checkBracket(s) {
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") stack.push(s[i]);
    else {
      let key = stack.pop();
      if (s[i] !== map[key]) return 0;
    }
  }
  if (stack.length !== 0) return 0;
  return 1;
}

console.log(solution("[](){}"));

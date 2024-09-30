// 단어 뒤집기 2

// baekjoon online judge
// noojkeab enilno egduj

// <open>tag<close>
// <open>gat<close>

// <int><max>2147483647<long long><max>9223372036854775807
// <int><max>7463847412<long long><max>7085774586302733229

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("");

let answer = [];
let temp = [];
let flag = false; // true -> "<"를 만남, false -> ">"를 만남

for (let i = 0; i < input.length; i++) {
  if (input[i] == "<") {
    if (temp.length > 0) {
      answer = answer.concat(temp);
      temp = [];
    }
    answer.push("<");
    flag = true;
  } else if (input[i] == ">") {
    answer.push(">");
    flag = false;
  }
  // "<" 와 ">" 사이가 아닌 문자열 (뒤집어야함)
  else {
    // flag가 true -> "<"가 열려있는 상태, 뒤집지않고 answer에 push
    if (flag) {
      answer.push(input[i]);
    } else {
      if (input[i] == " ") {
        temp.push(" ");
        answer = answer.concat(temp);
        temp = [];
      } else {
        // 뒤집어서 temp에 저장
        temp.unshift(input[i]);
      }
    }
  }
}

if (!flag) {
  answer = answer.concat(temp);
}

console.log(answer.join(""));

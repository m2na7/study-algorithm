// 문자열 분석

// This is String
// SPACE    1    SPACE
//  S a M p L e I n P u T
// 0L1A2S3T4L5I6N7E8

// 순서: 소 대 숫 공
// 10 2 0 2
// 0 10 1 8
// 5 6 0 16
// 0 8 9 0

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let answer = [];

for (let i = 0; i < input.length; i++) {
  let str = input[i].split("");
  if (str.length === 0) continue;

  let arr = [0, 0, 0, 0];

  for (let i of str) {
    let ascii = i.charCodeAt();

    if (ascii >= 97 && ascii <= 122) arr[0]++;
    else if (ascii >= 65 && ascii <= 90) arr[1]++;
    else if (ascii >= 48 && ascii <= 57) arr[2]++;
    else if (ascii === 32) arr[3]++;
  }

  answer.push(arr.join(" "));
}

console.log(answer.join("\n"));

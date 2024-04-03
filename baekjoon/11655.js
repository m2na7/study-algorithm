// ROT13

// Baekjoon Online Judge

// Onrxwbba Bayvar Whqtr

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("");

let arr = [];

for (let i = 0; i < input.length; i++) {
  let ascii = input[i].charCodeAt(0);

  if (ascii >= 65 && ascii <= 90) {
    let temp = ((ascii - 65 + 13) % 26) + 65;
    arr.push(String.fromCharCode(temp));
  } else if (ascii >= 97 && ascii <= 122) {
    let temp = ((ascii - 97 + 13) % 26) + 97;
    arr.push(String.fromCharCode(temp));
  } else {
    arr.push(input[i]);
  }
}

console.log(arr.join(""));

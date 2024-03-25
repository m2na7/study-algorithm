// 단어 뒤집기

// 2
// I am happy today
// We want to win the first prize

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const count = Number(input[0]);

for (i = 1; i < count + 1; i++) {
  arr = input[i].split(" ");

  let answer = [];
  for (let i in arr) {
    let word = arr[i].split("").reverse().join("");
    answer.push(word);
  }

  console.log(answer.join(" "));
}

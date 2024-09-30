// 소인수분해

// 72

// 2
// 2
// 2
// 3
// 3

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(" ");

let num = parseInt(input[0]);

let i = 2;
let arr = [];

while (true) {
  if (num % i === 0) {
    num = num / i;
    arr.push(i);
    i = 1;
  }
  i++;
  if (i > num) {
    break;
  }
}

console.log(arr.join("\n"));

// 알파벳 찾기

// baekjoon

// 1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("");

let map = new Map();

for (let i = 97; i <= 122; i++) {
  map.set(i, -1);
}

for (let i of input) {
  let ascii = i.charCodeAt();

  if (map.has(ascii)) {
    map.set(ascii, input.indexOf(i));
  }
}

let answer = Array.from(map.values());
console.log(answer.join(" "));
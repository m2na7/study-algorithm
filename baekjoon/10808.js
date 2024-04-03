// 알파벳 개수

// baekjoon

// 1 1 0 0 1 0 0 0 0 1 1 0 0 1 2 0 0 0 0 0 0 0 0 0 0 0

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("");

let map = new Map();

for (let i = 97; i <= 122; i++) {
  map.set(i, 0);
}

for (let i of input) {
  let ascii = i.charCodeAt();

  if (map.has(ascii)) {
    map.set(ascii, map.get(ascii) + 1);
  }
}

let answer = Array.from(map.values());
console.log(answer.join(" "));

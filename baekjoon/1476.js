// 날짜 계산

// 1 16 16

// 16

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

let [e, s, m] = input.map((v) => parseInt(v));
let cnt = 1;

while (true) {
  if ((cnt - e) % 15 === 0 && (cnt - s) % 28 === 0 && (cnt - m) % 19 === 0) {
    console.log(cnt);
    break;
  }
  cnt++;
}

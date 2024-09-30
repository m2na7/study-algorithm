// 네 수

// 10 20 30 40

// 4060

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(" ");

console.log(Number(input[0] + input[1]) + Number(input[2] + input[3]));
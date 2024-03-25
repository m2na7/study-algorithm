// 괄호

// 6
// (())())
// (((()())()
// (()())((()))
// ((()()(()))(((())))()
// ()()()()(()()())()
// (()((())()(

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const count = Number(input[0]);

for (i = 1; i < count + 1; i++) {
  const stack = [];
  let result = true;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "(") stack.push(input[i][j]);
    else {
      if (!stack.pop()) result = false;
    }
  }

  if (stack.length !== 0) result = false;

  result === true ? console.log("YES") : console.log("NO");
}

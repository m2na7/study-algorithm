function solution(s) {
  var countP = 0,
    countY = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") countP++;
    else if (s[i] === "y" || s[i] === "Y") countY++;
  }

  return countP === countY ? true : false;
}

console.log(solution("pPoooyY"));

// 다른 사람의 풀이

// function numPY(s) {
//   return (
//     s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
//   );
// }

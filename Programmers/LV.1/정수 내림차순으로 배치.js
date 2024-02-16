function solution(n) {
  let arr = String(n).split("");
  arr.sort(function (a, b) {
    return b - a;
  });

  return parseInt(arr.join(""));
}

// 다른 사람 풀이
// function solution(n) {
//   const newN = n + "";
//   const newArr = newN
//     .split("")
//     .sort()
//     .reverse()
//     .join("");

//   return +newArr;
// }

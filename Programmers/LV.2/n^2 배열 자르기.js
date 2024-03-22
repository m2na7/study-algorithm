function solution(n, left, right) {
  let arr = [];

  for (let i = left; i <= right; i++) {
    let l = parseInt(i / n); // 행값
    let r = parseInt(i % n); // 열값
    arr.push(Math.max(l, r) + 1);
  }
  return arr;
}

console.log(solution(3, 2, 5));

function solution(n) {
  let num = n.toString(2).split("1").length;

  while (true) {
    n++;
    if (n.toString(2).split("1").length === num) return n;
  }

}

console.log(solution(78)); // 1001110

function solution(n) {
  let answer = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n--;
      answer++;
    }
  }
  return answer;
}

console.log(solution(5000));

// 역으로 5000 에서부터 시작
// 0이 될때까지 2씩 나누고, 만약 홀수라면 한칸씩 이동하면된다. 

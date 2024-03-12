// 최대공약수 구하기
function gcd(a, b) {
  // b (나머지)가 0이 될때까지
  while (b > 0) {
    let r = b;
    b = a % b;
    a = r;
  }
  return a;
}

// 최소공배수 구하기
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  let answer = 1;
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }
  return answer;
}

console.log(solution([2, 6, 8, 14]));

// 유클리드 호제법

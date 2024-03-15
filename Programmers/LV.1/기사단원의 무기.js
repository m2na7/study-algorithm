function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let cnt = 0;

    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j === j) cnt++;
        else cnt += 2;
      }

      if (cnt > limit) {
        cnt = power;
        break;
      }
    }
    answer += cnt;
  }

  return answer;
}

console.log(solution(10, 3, 2));

// 시간초과
// 초기 코드는 O(n^2), 위와같이 약수의 대칭성을 이용하여 Math.sqrt()를 이용하면 O(n*n^1/2) 로 구할 수 있다..

// function solution(number, limit, power) {
//   let answer = 0;

//   for (let i = 1; i <= number; i++) {
//     let cnt = 0;

//     for (let j = 0; j <= i; j++) {
//       if (i % j === 0) {
//         cnt++;
//       }
//     }

//     if (cnt <= limit) answer += cnt;
//     else answer += power;
//   }

//   return answer;
// }

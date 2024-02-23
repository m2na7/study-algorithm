// 에라토스테네스의 체를 이용한 방법

function solution(n) {
  var arr = [];

  // 배열에 n까지의 수를 채운다
  for (let i = 2; i <= n; i++) {
    arr[i] = i;
  }

  // 해당 값의 배수에 해당하는 모든 수를 0으로 표시 (지움)
  for (let i = 2; i <= n; i++) {
    if (arr[i] === 0) continue;
    // 해당 값의 배수를 모두 0으로 표시 
    for (let j = i + i; j <= n; j += i) {
      arr[j] = 0;
    }
  }
  return arr.filter((el) => el).length;
}

console.log(solution(10));

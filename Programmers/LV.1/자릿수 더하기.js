function solution(n) {
  let arr = n.toString().split("");
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }

  return sum;
}

console.log(solution(123));

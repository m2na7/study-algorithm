// section5. 기준점 간 이동 배열 패턴

// O(n^2)
function maxSubarraySum2(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity; // 음수로 작업시 0으로 하면 안된다.

  for (let i = 0; i < arr.length; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// O(n)
// 다시계산하는게 아니라, 하나만 더해주고 처음값을 빼주면 된다.
// -> Sliding Window
function maxSubarraySum(arr, num) {
    if (num > arr.length) {
      return null;
    }
    let maxSum = 0;
    let tempSum = 0;
  
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
  
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
  
    return maxSum;
  }

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17

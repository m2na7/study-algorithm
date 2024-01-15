// 기수 정렬
// 시간 복잡도 : O(nk), 공간 복잡도 O(n+k) 아주 긴 자릿수의 숫자가 있다면 매우 불리한 정렬방법

// getDigit(12345, 1) -> 4 // getDigit(12345, 4) -> 1
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// digitCount(24) -> 2 // digitCount(78532) -> 5
function digitCount(num) {
  if (num === 0) return 1; // log10(0) -> error, special case 추가해줘야함
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// mostdigits([12345, 32, 444, 1]) -> 5
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums); // 최대자릿수 만큼 루프를 반복해야함
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []); // 10개의 빈 배열 생성 (0 ~ 9)
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets); // 배열을 재할당하여 정렬한 순서대로 붙인다(concat)
  }
  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));

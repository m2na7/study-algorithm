// section5. 분할과 정복: 이진탐색

function search(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (arr[mid] < num) {
      min = mid + 1;
    } else if (arr[mid] > num) {
      max = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 7)); // 6

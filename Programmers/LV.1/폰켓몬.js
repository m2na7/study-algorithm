function solution(nums) {
  let length = nums.length / 2;
  const map = new Map();

  for (const i of nums) {
    if (map.get(i)) map.set(i, map.get(i) + 1);
    else map.set(i, 1);
  }

  if (map.size > length) {
    return length;
  }

  return map.size;
}

console.log(solution([3, 3, 3, 2, 2, 2]));
console.log(solution([3, 1, 2, 3]));

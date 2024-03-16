function solution(clothes) {
  let answer = 1;
  const map = new Map();

  for (const [c, t] of clothes) {
    // 같은 타입의 옷이 있으면 +1
    if (map.get(t)) map.set(t, map.get(t) + 1);
    // 새로운 타입의 종류라면 새로 만듬
    else map.set(t, 1);
  }

  for (const [key, val] of map) {
    answer *= val + 1;
  }

  // 아무것도 선택하지 않은경우 빼줌
  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);

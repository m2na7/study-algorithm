// 배열을 붙이면 모든 값을 순회할 수 있다.
// 중복값은 Set을 이용해서 제거한다.

function solution(elements) {
  let arr = [...elements, ...elements];
  const set = new Set();

  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j + i < arr.length; j++) {
      set.add(arr.slice(j, j + i).reduce((a, c) => a + c, 0));
    }
  }

  return set.size;
}

console.log(solution([7, 9, 1, 1, 4]));

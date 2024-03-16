function solution(scoville, K) {
  let cnt = 0;

  while (scoville.length > 1) {
    scoville.sort((a, b) => b - a);

    if (scoville[scoville.length - 1] >= K) return cnt;

    const mixed = scoville.pop() + scoville.pop() * 2;
    scoville.push(mixed);
    cnt++;
  }

  return scoville[0] >= K ? cnt : -1;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));

// 코드 정확성 테스트는 문제 없으나, while문안에서 정렬사용 -> 최악 O(n^2)
// 효율성 테스트 실패. 힙 자료구조 사용해서 풀어야 통과가 가능하다.
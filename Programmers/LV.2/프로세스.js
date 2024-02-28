function solution(priorities, location) {
  var answer = 0;

  // 배열에 idx 추가 idx -> 문제에서의 A, B, C, ...
  const arr = priorities.map((process, idx) => {
    return { process, idx };
  });

  while (arr.length) {
    const queue = arr.shift();

    // 우선순위가 더 높은 작업이 존재한다면 다시 큐의 끝에 추가
    if (arr.some((el) => el.process > queue.process)) arr.push(queue);
    else {
      answer += 1;

      if (queue.idx === location) break;
    }
  }
  return answer;
}

console.log(solution([2, 1, 3, 2], 2));

// 2(A), 1(B), 3(C), 2(D)
// 1(B), 3(C), 2(D), 2(A)
// 3(C), 2(D), 2(A), 1(B)
// 2(D), 2(A), 1(B) // answer = 1
// 2(A), 1(B) // answer = 2 -> break

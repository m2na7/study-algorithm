function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    // 문자가 같은 경우 사전순 정렬
    return a.localeCompare(b);
  });
  return strings;
}

console.log(solution(["sun", "bed", "car"], 1));
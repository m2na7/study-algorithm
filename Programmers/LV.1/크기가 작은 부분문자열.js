function solution(t, p) {
  let answer = 0;
  for (let i = 0; i < t.length - p.length; i++) {
    let num = t.slice(i, i + p.length);
    if (num <= p) answer++;
  }
  return answer;
}

console.log(solution("3141592", "271"));

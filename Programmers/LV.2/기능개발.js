function solution(progresses, speeds) {
  let answer = [];

  while (speeds.length > 0) {
    let cnt = 0;
    for (let i = 0; i < speeds.length; i++) {
      if (progresses[i] < 100) progresses[i] += speeds[i];
    }
    console.log(progresses);

    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      cnt++;
    }

    if (cnt > 0) answer.push(cnt);
  }

  return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(false);
  let answer = 0;

  const dfs = (k, cnt) => {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && k >= dungeons[i][0]) {
        visited[i] = true;
        dfs(k - dungeons[i][1], cnt + 1);
        visited[i] = false;
      }
    }
    answer = Math.max(answer, cnt);
  };

  dfs(k, 0);

  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);

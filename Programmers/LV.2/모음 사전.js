function solution(word) {
  let cnt = 0;
  let flag = false;
  let vowels = ["A", "E", "I", "O", "U"];

  const dfs = (str) => {
    if (str.length > 5 || flag) return;

    if (str === word) {
      flag = true;
      return;
    }
    cnt++;

    for (let i = 0; i < vowels.length; i++) {
      dfs(str + vowels[i]);
    }
  };

  dfs("");

  return cnt;
}

console.log(solution("AAAAE")); // 6

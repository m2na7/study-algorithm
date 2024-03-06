function solution(n, words) {
  for (let i = 1; i < words.length; i++) {
    if (
      words[i - 1].slice(-1) !== words[i][0] ||
      words.slice(0, i).includes(words[i])
    ) {
      return [(i % n) + 1, parseInt(i / n) + 1];
    }
  }

  return [0, 0];
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);

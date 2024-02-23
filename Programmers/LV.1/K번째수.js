function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    var startIdx = commands[i][0] - 1;
    var endIdx = commands[i][1];
    var k = commands[i][2] - 1;

    var arr = array.slice(startIdx, endIdx).sort((a, b) => a - b);
    answer.push(arr[k]);
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);

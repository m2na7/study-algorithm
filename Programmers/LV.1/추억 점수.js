function solution(name, yearning, photo) {
  let answer = [];

  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < photo[i].length; j++) {
      let idx = name.indexOf(photo[i][j]);
      if (idx !== -1) sum += yearning[idx];
    }
    answer.push(sum);
  }

  return answer;
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);

// function solution(name, yearning, photo) {
//   let answer = [];
//   let sum = 0;
//   const map = new Map();

//   for (let i = 0; i < name.length; i++) {
//     map.set(name[i], yearning[i]);
//   }

//   for (let i = 0; i < photo.length; i++) {
//     for (let j = 0; j < name.length; j++) {
//       if (map.has(photo[i][j])) {
//         sum += map.get(photo[i][j]);
//       }
//     }
//     answer[i] = sum;
//     sum = 0;
//   }

//   return answer;
// }

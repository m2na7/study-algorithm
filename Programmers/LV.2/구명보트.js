function solution(people, limit) {
  people.sort((a, b) => a - b);
  let count = 0;

  while (people.length) {
    if (people[0] + people[people.length - 1] <= limit) {
      people.shift();
      people.pop();
    } else {
      people.pop();
    }
    count++;
  }

  return count;
}

console.log(solution([70, 50, 80, 50], 100));

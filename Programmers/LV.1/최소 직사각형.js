function solution(sizes) {
  let arr = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));
  let maxW = 0,
    maxH = 0;

  for (let i = 0; i < arr.length; i++) {
    maxW = Math.max(maxW, arr[i][0]);
    maxH = Math.max(maxH, arr[i][1]);
  }

  console.log(maxW, maxH);
  return maxH * maxW;
}

console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);

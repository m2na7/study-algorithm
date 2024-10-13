// 사탕 게임

// 3
// CCP
// CCP
// PPC

// 3

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = parseInt(input[0]);
const board = input.slice(1).map((line) => line.split(""));

// 연속된 최대 사탕 개수를 구하는 함수
function countMax(board) {
  let maxCandy = 0;

  // 행에 대해서 검사
  for (let i = 0; i < n; i++) {
    let row = 1;
    for (let j = 1; j < n; j++) {
      if (board[i][j] === board[i][j - 1]) {
        row++;
      } else {
        row = 1;
      }
      maxCandy = Math.max(maxCandy, row);
    }
  }

  // 열에 대해서 검사
  for (let j = 0; j < n; j++) {
    let col = 1;
    for (let i = 1; i < n; i++) {
      if (board[i][j] === board[i - 1][j]) {
        col++;
      } else {
        col = 1;
      }
      maxCandy = Math.max(maxCandy, col);
    }
  }

  return maxCandy;
}

let maxCandy = 0;

// 사탕 교환 후, 최대 사탕 개수 찾기
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // 오른쪽 사탕과 교환 -> 계산 -> 복구
    if (j + 1 < n) {
      [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
      maxCandy = Math.max(maxCandy, countMax(board));
      [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
    }

    // 아래쪽 사탕과 교환 -> 계산 -> 복구
    if (i + 1 < n) {
      [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
      maxCandy = Math.max(maxCandy, countMax(board));
      [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
    }
  }
}

console.log(maxCandy);

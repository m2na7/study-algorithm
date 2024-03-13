function solution(phone_book) {
  // 접두어가 될 수 있다면, 해당 원소의 바로 뒷부분에 위치하게된다.
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length))
      return false;
  }

  return true;
}

console.log(solution(["119", "1195524421", "92827"]));

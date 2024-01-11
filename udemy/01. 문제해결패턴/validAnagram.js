// 빈도수 세기 - validAnagram
// 두 개의 문자열이 주어졌을 때, 두 번째 문자열이 첫 번째 문자열의 애너그램인지 확인하는 함수를 작성합니다.
// 애너그램은 다른 글자의 글자를 재배열하여 형성된 단어, 구 또는 이름입니다. (예시: cinema -> iceman)

function validAnagram(first, second) {
  // 길이가 다르면 false
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // lookup 객체에 해당 문자를 카운팅 (이미 존재하면 +1 새로운 문자면 1)
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    console.log(lookup);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // letter를 찾을 수 없거나, 0면 애너그램이 아님
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1; // 같으면 감소
    }
  }
  return true;
}

// { a: 3, n: 1, g: 1, r: 1, m: 1 }
console.log(validAnagram("anagram", "nagaram"));

function middle(word) {
  let answer = "";
  let mid = Math.floor(word.length / 2);

  if (word.length % 2 === 0) {
    // 짝수 길이의 경우, 가운데 두 문자 출력
    answer = word[mid - 1] + word[mid];
  } else {
    // 홀수 길이의 경우, 가운데 한 문자 출력
    answer = word[mid];
  }
  return answer;
}

const gg = "gowyy";
console.log(middle(gg));
//! 20230324 복습
//! 20240901 복습

// Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만
//그 구성이 일치하면 두 단어는 아나그램이라고 합니다.
function solution(str1, str2) {
  let answer = "YES";
  let sH = new Map();
  for (let x of str1) {
    // x를 가지고 있다면 x의 값을 1증가
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    // x를 가지고 있지 않다면 x를 추가하고 값은 1로 넣음.
    else sH.set(x, 1);
  }
  console.log("sh", sH);
  for (let x of str2) {
    // x를 가지고 있지 않거나, 0일 경우, 못 빼는거고
    // sh안에 x의 값이 없거나, key의 value가 0이면 기존
    // sh (str1) 을 다 상쇄 시켜서 없는 상태라 일치 하지 않아서 NO
    if (!sH.has(x) || sH.get(x) === 0) return "NO";
    // 하나씩 차감
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}
let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
// 20250211 복습

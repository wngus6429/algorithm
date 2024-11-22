const a = [2, 3, 3, 1, 3];
const b = [1, 1, 2, 2, 3];
function solution(a, b) {
  // a가 이기는 경우랑, 비길경우 넣고 그 외에는 B가 이긴걸로
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1 && b[i] === 3) {
      answer.push("A");
    } else if (a[i] === 2 && b[i] === 1) {
      answer.push("A");
    } else if (a[i] === 3 && b[i] === 2) {
      answer.push("A");
    } else if (a[i] === b[i]) {
      answer.push("D");
    } else {
      answer.push("B");
    }
  }
  return answer;
}
console.log(solution(a, b));
//! 20220813 복습
//! 20230325 복습
//! 20241122 복습

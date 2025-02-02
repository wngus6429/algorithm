function solution(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) {
      answer += x;
    }
  }
  console.log(answer);
  return parseInt(answer); // 208
}
let str = "g0en2T0s8eSoft";
console.log(solution(str));
// 20220813 복습
// 20230507 복습
// 20241229 복습
// 20250129 복습

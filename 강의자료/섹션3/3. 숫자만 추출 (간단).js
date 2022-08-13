function solution(str) {
  let answer = '';
  for (let x of str) {
    if (!isNaN(x)) {
      answer += x;
    }
  }
  console.log(answer); // 0208
  return parseInt(answer); // 208
}
let str = 'g0en2T0s8eSoft';
console.log(solution(str));
// 20220813 복습

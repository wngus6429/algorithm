const 문제 = "KKHSSSSSSSE";
function solution(문제) {
  answer = [];
  반복횟수 = 1;
  for (let i = 0; i < 문제.length; i++) {
    if (문제[i - 1] !== 문제[i]) {
      answer.push(문제[i]);
    }
    for (let g = 1; g < 문제.length; g++) {
      console.log(문제[i], 문제[g]);
      if (문제[i] === 문제[g]) {
        반복횟수++;
      }
      if (문제[i] !== 문제[g] && 문제[i] !== 문제[i - 1]) {
        if (answer[i] !== 문제[g]) {
          answer.push(String(반복횟수));
          반복횟수 = 1;
        }
      }
    }
  }
  return answer;
}
console.log(solution(문제));
// 문자가

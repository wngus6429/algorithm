function solution(what) {
  let max = Number.MIN_SAFE_INTEGER;
  let num = 0;
  let answer = '';
  for (let i = 0; i < what.length; i++) {
    let gg = String(what[i]);
    for (let g = 0; g < gg.length; g++) {
      num += Number(gg[g]);
    }
    if (max <= num) {
      max = num;
      num = 0;
      if (answer < what[i]) {
        answer = what[i];
      }
    }
    num = 0;
  }
  return answer;
}
const what = [128, 460, 603, 40, 521, 137, 123];
console.log('답', solution(what));

function solution2(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10); //! 소수점 없앰
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}
let arr = [128, 460, 603, 40, 521, 137, 123];
console.log('강의', solution2(7, arr));

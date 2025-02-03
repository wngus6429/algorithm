function solution(what) {
  let max = Number.MIN_SAFE_INTEGER;
  let num = 0;
  let answer = "";
  // 한개씩 문자열로 만들어준다.
  for (let i = 0; i < what.length; i++) {
    let gg = String(what[i]);
    // 문자 한개씩 숫자로 바꾸며 총 합 num 구한다.
    for (let g = 0; g < gg.length; g++) {
      num += Number(gg[g]);
    }
    // num이 max보다 크면 넣는다. 넣으면 num 초기화
    if (max <= num) {
      max = num;
      num = 0;
      // 만약 answer보다 숫자가 크면
      if (answer < what[i]) {
        // 숫자를 answer에 넣는다.
        answer = what[i];
      }
    }
    // 기본 초기화
    num = 0;
  }
  return answer;
}
const what = [128, 460, 603, 40, 521, 137, 123];
console.time();
console.log("답", solution(what));
console.timeEnd();

// function solution2(n, arr) {
//   let answer;
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let x of arr) {
//     let sum = 0,
//       tmp = x;
//     while (tmp) {
//       sum += tmp % 10;
//       console.log("sum", sum);
//       console.log("tmp1", tmp);
//       tmp = Math.floor(tmp / 10); //! 소수점 없앰
//       console.log("tmp2", tmp);
//     }
//     if (sum > max) {
//       max = sum;
//       answer = x;
//       // 128, 137 때문에 그럼
//     } else if (sum === max) {
//       if (x > answer) answer = x;
//     }
//   }
//   return answer;
// }
// let arr = [128, 460, 603, 40, 521, 137, 123];
// console.time();
// console.log("강의", solution2(7, arr));
// console.timeEnd();

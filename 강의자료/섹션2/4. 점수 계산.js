// function solution(numbers) {
//   let answer = 0;
//   let stack = 1;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 1) {
//       answer += stack;
//       stack += 1;
//     } else {
//       stack = 1;
//     }
//   }
//   return answer;
// }
// const numbers = [1, 0, 1, 1, 1, 1, 0, 1, 1, 0];
// console.log(solution(numbers)); // 1 + 1 + 2 + 3+ 4 + 1 + 2
// 20220813 복습


function solution(arr) {
  let answer = 0;
  let stack = 1;
  for (let i of arr){
    if (i === 1){
      answer += stack;
      stack += 1;
    } else {
      stack = 1;
    }
  }
  return answer;
}


const numbers = [1, 0, 1, 1, 1, 1, 0, 1, 1, 0];
console.log(solution(numbers));
//! 20230325 복습
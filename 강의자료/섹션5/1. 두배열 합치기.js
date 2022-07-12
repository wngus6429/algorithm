// function solution(arr1, arr2) {
//   let answer = [];
//   answer.push(...arr1);
//   answer.push(...arr2);
//   answer.sort();
//   return answer;
// }

function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = 0;
  let p2 = 0;
  // 둘중 하나라도 다 되면 반복 끝나는거지
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1++]); // push하고나서 1증가 하는거임
    } else {
      answer.push(arr2[p2++]);
    }
  }
  // 누가 남앗누?? 남은거 넣기
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));

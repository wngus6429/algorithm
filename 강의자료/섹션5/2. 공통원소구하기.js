function solution(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  for (let i = 0; i < arr1.length; i++) {
    for (let g = 0; g < arr2.length; g++) {
      if (arr1[i] === arr2[g]) {
        answer.push(arr1[i]);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}
let a = [1, 3, 9, 5, 2, 10, 33, 22];
let b = [3, 2, 5, 7, 8, 22];
console.log(solution(a, b));
// 20250209 복습

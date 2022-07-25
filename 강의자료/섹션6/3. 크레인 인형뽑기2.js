function solution(arr1, crain) {
  let answer = 0;
  let stack = [];
  let temp = 0;
  for (let g = 0; g < crain.length; g++) {
    for (let i = 0; i < arr1.length; i++) {
      for (let k = 0; k < arr1[i].length; k++) {
        if (arr1[i][g] !== 0) {
          if (temp === arr1[i][g]) {
            answer++;
          } else {
            stack.push(arr1[i][g]);
            temp = arr1[i][g];
          }
        }
      }
    }
  }
  return answer;
}
let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
function solution(arr) {
  let answer = 0;
  let sum1 = 0; // 행의합
  let sum2 = 0; // 열의합
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i][j]);
    }
  }
}
console.log(solution(arr));

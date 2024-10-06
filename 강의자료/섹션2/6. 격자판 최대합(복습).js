let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let tempSum = 0;
  // 행의 합
  for (let i = 0; i < arr.length; i++) {
    for (let g = 0; g < arr.length; g++) {
      tempSum += arr[i][g];
    }
    if (answer < tempSum) {
      answer = tempSum;
      tempSum = 0;
    }
    tempSum = 0;
  }
  // 열의 합
  for (let i = 0; i < arr.length; i++) {
    for (let g = 0; g < arr.length; g++) {
      tempSum += arr[g][i];
    }
    if (answer < tempSum) {
      answer = tempSum;
      tempSum = 0;
    }
    tempSum = 0;
  }
  // 대각선의 합
  for (let i = 0; i < arr.length; i++) {
    tempSum += arr[i][i];
    if (answer < tempSum) {
      answer = tempSum;
      tempSum = 0;
    }
  }
  // 대각선의 합
  for (let i = 0; i < arr.length; i++) {
    tempSum += arr[i][arr.length - i - 1];
    if (answer < tempSum) {
      answer = tempSum;
      tempSum = 0;
    }
  }
  return answer;
}

console.log(solution(arr));
// 20241006 복습

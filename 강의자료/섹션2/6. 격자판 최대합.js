let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = 0; // 행의합을 구함
  let sum2 = 0; // 열의합을 구함
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0; // 초기화
    for (let g = 0; g < n; g++) {
      sum1 += arr[i][g]; // 행
      sum2 += arr[g][i]; // 열
    }
    answer = Math.max(answer, sum1, sum2); //이 3개중에 최대값 들어감
  }
  sum1 = sum2 = 0;
  //   console.log(sum1, sum2);
  for (let k = 0; k < n; k++) {
    sum1 += arr[k][k]; // 이게 대각선이지
    sum2 += arr[k][n - k - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}
console.log(solution(arr));

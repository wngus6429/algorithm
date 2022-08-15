let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length; // 5
  let sum1 = 0; // 행의합을 구함
  let sum2 = 0; // 열의합을 구함
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0; // 초기화
    for (let g = 0; g < n; g++) {
      sum1 += arr[i][g]; // 행, 가로
      sum2 += arr[g][i]; // 열, 세로
    }
    // 행, 열 싹다 구해서 제일 큰 수가 answer에 남아있게끔
    answer = Math.max(answer, sum1, sum2); //이 3개중에 최대값 들어감
  }
  sum1 = sum2 = 0;
  for (let k = 0; k < n; k++) {
    // 왼쪽 위에서 오른쪽 아래 대각선 값 구함
    // 오른쪽 위에서 왼쪽 아래 대각선 값 구함
    sum1 += arr[k][k];
    sum2 += arr[k][n - k - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  // 행, 열, 대각선 모든 값 다 구해서 젤 큰놈 answer에 들어있음.
  return answer;
}
console.log(solution(arr));
// 20220814 복습

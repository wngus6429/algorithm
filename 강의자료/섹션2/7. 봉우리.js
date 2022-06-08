let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0]; // 12시 3시 6시 9시 방향
  let dy = [0, 1, 0, -1]; // 12시 3시 6시 9시 방향
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        // 4방향 보기위해
        let nx = i + dx[k]; // 갈려고 하는 행 좌표
        let ny = j + dy[k]; // 갈려고 하는 열 좌표
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] > arr[i][j]) {
          flag = 0;
          break; //상하좌우 한곳만 커도 중지시키기 위해
        }
      }
      if (flag) {
        answer++;
      }
    }
  }
  return answer;
}
console.log(solution(arr));

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
      // 위에 두개는 2차원 배열 하나하나 움직이기 위한것.
      let flag = 1;
      // 4방향 보기위한 for문
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k]; // 갈려고 하는 행 좌표
        let ny = j + dy[k]; // 갈려고 하는 열 좌표
        console.log(nx, ny);
        // 밑에 if 문에 걸리면 4방향쪽에 큰게 있어서 봉우리가 아니게됨.
        // 빈공간의 위치를 탐색하지 않게끔. 조건 걸어줬다. arr[-1]이런건 없으니까.
        // arr[nx][ny]가 북동남서를 보는거고 arr[i][j]가 봉우리가 될지 안될지 판단 위치
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
// 20220814복습

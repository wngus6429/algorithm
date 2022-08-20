// dist 거리로 계산하면 몇마리 가능?
function count(stable, dist) {
  let cnt = 1; // 한마리는 무조건 배치하니까
  let ep = stable[0]; // 무조건 맨 왼쪽 한마리 넣는게 좋지
  for (let i = 1; i < stable.length; i++) {
    // 마굿간 거리
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }
  return cnt; //마릿수
}
function solution(c, stable) {
  let answer;
  // 숫자 정렬이라 콜백 꼭 해줘야함.
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];
  // mid를 구해보니 5더라.
  // 근데 5로 해보니까 너무 숫자가 커서 안되더라.
  // mid를 줄여줘야함.
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
      // mid의 거리로는 c마리 배치 안되서
    } else rt = mid - 1;
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));

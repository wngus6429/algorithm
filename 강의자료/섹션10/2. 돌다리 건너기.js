function solution(n) {
  let answer = 0;
  // 돌이 7개 인거임. 최종 건너는 갯수로 생각해야함
  // 시작 땅 한개, 마지막 위치 땅 1개
  let dy = Array.from({ length: n + 2 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n + 1];
  return answer;
}

console.log(solution(7));
// 3칸씩 건널수도 있을때
// dy[0] = 1
// dy[1] = 1
// dy[2] = 2

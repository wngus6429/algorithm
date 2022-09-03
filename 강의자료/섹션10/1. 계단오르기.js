function solution(n) {
  let answer = 0;
  // n보다 1개 많게 내용은 모두 0으로 초기화한 배열
  let dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  console.log(dy);
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n];
  return answer;
}
// 인덱스 1과 2의 값은 이미 정해져 있지.
// [0, 1, 2, 3, 5, 8, 13, 21] 이런식으로 0부터 더해간다.
console.log(solution(7));

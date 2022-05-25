function solution(a, b, c) {
  // 두개를 비교한 다음에 나머지 하나를 처리한다.
  let answer;
  if (a > b) answer = b;
  else answer = a;
  if (c < answer) answer = c;
  return answer;
}
console.log(solution(60, 50, 11));

function solution2(a, b, c) {
  // 두개를 비교한 다음에 나머지 하나를 처리한다.
  return Math.min(a, b, c);
}
console.log(solution2(60, 50, 11));

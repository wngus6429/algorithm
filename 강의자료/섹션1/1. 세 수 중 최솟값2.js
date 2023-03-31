function solution(a, b, c) {
  //먼저 2개를 비교하고 나머지 한개를 비교하는 방법
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}
console.log(solution(234, 523, 1112));
//! 20220814 복습
//! 20230324 복습
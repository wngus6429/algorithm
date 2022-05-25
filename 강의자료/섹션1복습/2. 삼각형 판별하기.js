function solution(a, b, c) {
  let answer;
  let max;
  // 가장 큰 길이의 변보다 다른 수2개가 더 커야 삼각형성립
  max = Math.max(a, b, c);
  return max;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
console.log(solution(5, 5, 5));

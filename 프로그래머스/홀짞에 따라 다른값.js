function solution(n) {
  let sum = 0;
  if (n % 2 === 1) {
    // 홀수인 경우
    for (let i = 1; i <= n; i += 2) {
      sum += i;
    }
  } else {
    // 짝수인 경우
    for (let i = 2; i <= n; i += 2) {
      sum += i * i;
    }
  }
  return sum;
}
console.log(solution(7)); // 16
console.log(solution(10)); // 220

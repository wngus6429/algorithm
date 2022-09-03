function solution(num) {
  let answer = 0;
  for (let i = 1; i <= num; i++) {
    for (let g = 1; g <= num; g++) {
      answer += i % g;
    }
  }
  return answer;
}
console.log(solution(512));

// console.log(2 % 3);

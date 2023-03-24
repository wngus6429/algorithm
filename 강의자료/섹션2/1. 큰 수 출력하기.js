function solution(numbers) {
  let answer = [];
  answer.push(numbers[0]);
  for (let i = 1; i < numbers.length; i++) {
    // 자신의 앞 수라서, 지금 위치와 앞의 위치 비교 필요
    if (numbers[i] >= numbers[i - 1]) {
      answer.push(numbers[i]);
    }
  }
  return answer;
}
const numbers = [7, 3, 9, 5, 6, 12];
console.log(solution(numbers));
//! 20220813 복습
//! 20230324 복습
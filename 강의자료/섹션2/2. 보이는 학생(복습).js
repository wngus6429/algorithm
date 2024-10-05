function solution(numbers) {
  let answer = [];
  answer.push(numbers[0]);
  let max = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (max < numbers[i]) {
      answer.push(numbers[i]);
      max = numbers[i];
    }
  }
  return answer;
}

const numbers = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(numbers));
// 20241005 복습

function solution(numbers) {
  let answer = [];
  answer.push(numbers[0]);
  let temp = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > temp) {
      answer.push(numbers[i]);
    }
    temp = numbers[i];
  }
  return answer;
}

const numbers = [7, 3, 9, 5, 6, 12];
console.log(solution(numbers));
// 20241005 복습
// 20241122 복습

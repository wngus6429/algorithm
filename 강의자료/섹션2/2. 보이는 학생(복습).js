function solution(numbers) {
  let answer = [];
  answer.push(numbers[0]);
  let big = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > big) {
      answer.push(numbers[i]);
      big = numbers[i];
    }
  }
  return answer.length;
}

const numbers = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(numbers));
// 20241005 복습
// 20241122 복습

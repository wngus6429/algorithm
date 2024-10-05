function solution(numbers) {
  let answer = [];
  answer.push(numbers[0]);
  for (let i = 1; i < numbers.length; i++) {
    let check = numbers[i - 1];
    if (check < numbers[i]) {
      answer.push(numbers[i]);
    }
  }
  return answer;
}

const numbers = [7, 3, 9, 5, 6, 12];
console.log(solution(numbers));
// 20241005

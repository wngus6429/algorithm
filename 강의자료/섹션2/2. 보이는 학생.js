const numbers = [130, 135, 148, 140, 145, 150, 150, 153];
function solution(numbers) {
  let answer = 1;
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (max < numbers[i]) {
      answer++;
      max = numbers[i];
    }
  }
  return answer;
}
console.log(solution(numbers));

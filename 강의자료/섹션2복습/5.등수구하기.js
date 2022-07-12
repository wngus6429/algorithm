const numbers = [87, 89, 92, 100, 76];
function solution(numbers) {
  let answer = Array.from({ length: numbers.length }, () => 1);
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        answer[j]++;
      }
      console.log(numbers[i], numbers[j], answer);
    }
  }
  return answer;
}
console.log(solution(numbers));

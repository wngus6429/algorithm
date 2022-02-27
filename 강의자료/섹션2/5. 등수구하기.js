const numbers = [87, 89, 92, 100, 76];
function solution(numbers) {
  let answer = Array.from({ length: numbers.length }, () => 1);
  console.log(answer);
  for (let i = 0; i < numbers.length; i++) {
    for (let g = 0; g < numbers.length; g++) {
      if (numbers[i] > numbers[g]) {
        answer[g]++;
      }
    }
  }
  return answer;
}
console.log(solution(numbers));

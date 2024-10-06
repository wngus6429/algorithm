function solution(numbers) {
  let answer = Array.from({ length: numbers.length }, () => 1);
  console.log(answer);
  for (let i = 0; i < numbers.length; i++) {
    for (let g = 0; g < numbers.length; g++) {
      console.log(numbers[i], numbers[g]);
      if (numbers[i] < numbers[g]) {
        answer[i]++;
      }
    }
  }
  return answer;
}

const numbers = [87, 89, 92, 100, 76];
console.log(solution(numbers));
// 20241006 복습

const numbers = [1, 0, 1, 1, 1, 0, 1, 1, 0];
function solution(numbers) {
  let score = 0;
  let stack = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1) {
      score += stack;
      stack += 1;
    } else {
      stack = 1;
    }
  }
  return score;
}
console.log(solution(numbers));

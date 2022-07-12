function solution(date, arr) {
  let answer = 0;
  for (const x of arr) {
    if (x % 10 === date) {
      answer++;
    }
  }
  return answer;
}
const date = 3;
const arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(date, arr));

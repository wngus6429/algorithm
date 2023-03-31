function solution(numbers) {
  // 배열 길이를 numbers.length만큼 1로 초기화 시켜줌
  let answer = Array.from({ length: numbers.length }, () => 1);
  for (let i = 0; i < numbers.length; i++) {
    for (let g = 0; g < numbers.length; g++) {
      if (numbers[i] > numbers[g]) {
        console.log(numbers[i], numbers[g]);
        //! 등수는 숫자가 작을수록 높은거니까.
        answer[g]++;
        console.log(answer);
      }
    }
  }
  return answer;
}
const numbers = [87, 89, 92, 100, 76];
console.log(solution(numbers));
//! 20220814 복습
//! 20230325 복습
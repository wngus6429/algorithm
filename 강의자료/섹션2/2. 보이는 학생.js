function solution(numbers) {
  let answer = 1;
  // 맨 앞사람은 무조건 보이니까 초기화
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    // 앞에 애보다 커야 보이니까. 키 같으면 안보임.
    if (max < numbers[i]) {
      answer++;
      max = numbers[i];
    }
  }
  return answer;
}
const numbers = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(numbers));

// 20220813 복습

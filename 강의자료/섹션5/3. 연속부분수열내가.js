// 투포인트 알고리즘
function solution(num, arr) {
  let answer = 0;
  let left = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === num) {
      answer++;
    }
    while (sum > num) {
      left++;
      sum -= arr[left];
      if (sum === num) {
        answer++;
      }
    }
  }
  return answer;
}
let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

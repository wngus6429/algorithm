// 투포인트 알고리즘
function solution(num, arr) {
  let answer = 0;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    if (sum === num) answer++;
    while (sum >= num) {
      sum -= arr[left];
      left++;
      if (sum === num) answer++;
    }
  }
  return answer;
}
let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

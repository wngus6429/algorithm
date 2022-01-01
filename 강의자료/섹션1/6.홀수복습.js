function 홀수(arr) {
  let answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      sum += arr[i];
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}
let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(홀수(arr));

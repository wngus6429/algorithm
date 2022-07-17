function solution(limit, arr) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let g = i; g < i + limit; g++) {
      sum += arr[g];
      console.log(arr[g]);
    }
    console.log('한타임');
    if (sum > answer) {
      answer = sum;
    }
    sum = 0;
  }
  return answer;
}
let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));

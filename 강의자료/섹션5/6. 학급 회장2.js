function solution(arr) {
  let A = 0;
  let B = 0;
  let C = 0;
  let D = 0;
  let E = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], typeof arr[i]);
    if (arr[i] === 'A') {
      A += 1;
    }
    if (arr[i] === 'B') {
      B += 1;
    }
    if (arr[i] === 'C') {
      C += 1;
    }
    if (arr[i] === 'D') {
      D += 1;
    }
    if (arr[i] === 'E') {
      E += 1;
    }
    console.log('아', A, B, C, D, E);
  }
  return Math.max(A, B, C, D, E);
}
let str = 'BACBACCACCBDEDE';
console.log(solution(str));

function solution(string1, string2) {
  let answer = 'YES';
  let A = new Map();
  let B = new Map();
  for (let x of string1) {
    if (A.has(x)) {
      A.set(x, A.get(x) + 1);
    } else A.set(x, 1);
  }
  for (let x of string2) {
    if (B.has(x)) {
      B.set(x, B.get(x) + 1);
    } else B.set(x, 1);
  }
  console.log(A, B);
}
let a = 'abaCC';
let b = 'Caaab';
console.log(solution(a, b));

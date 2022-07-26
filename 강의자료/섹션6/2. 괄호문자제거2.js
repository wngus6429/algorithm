function solution(str) {
  let answer = '';
  stack = [];
  for (const x of str) {
    if (x === '(') {
      stack.push(x);
    } else if (x === ')') {
      stack.pop();
    } else if (stack.length === 0) {
      answer += x;
    }
  }
  return answer;
}
let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));

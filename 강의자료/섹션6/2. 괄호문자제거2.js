function solution(str) {
  let answer = "";
  stack = [];
  for (const x of str) {
    // ( 가 있으면 넣고
    if (x === "(") {
      stack.push(x);
      // ) 가 있으면 아까 넣은 ( 빼버린다.
    } else if (x === ")") {
      stack.pop();
      // stack.length가 0이면 괄호안에 없는 문자니까 더 함
    } else if (stack.length === 0) {
      answer += x;
    }
  }
  return answer;
}
let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
// 20250215 복습

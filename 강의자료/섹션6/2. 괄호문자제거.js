function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    // )를 만나면
    if (x === ')') {
      console.log('stack1', stack);
      // ( 가 없어질때까지 지운다.
      while (stack.pop() !== '(');
      console.log('stack2', stack);
      // ) 가 아니면 stack에 넣는다.
    } else stack.push(x);
  }
  // 최종만들어진 배열을 join으로 문자열로 만들어서 답에 넣음.
  answer = stack.join('');
  return answer;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));

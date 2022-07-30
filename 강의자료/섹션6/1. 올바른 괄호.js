function solution(s) {
  let answer = 'YES';
  stack = [];
  for (let x of s) {
    // ( 이면 넣고 ) 이면 뺀다. 그 길이가 0이면
    if (x === '(') {
      stack.push(x);
    } else {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }
  if (stack.length > 0) return 'NO';
  return answer;
}

let a = '(()(()))(()';
console.log(solution(a));

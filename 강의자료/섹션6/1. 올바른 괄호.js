function solution(s) {
  let answer = "YES";
  stack = [];
  for (let x of s) {
    // ( 이면 넣고 ) 이면 뺀다. 그 길이가 0이면
    if (x === "(") {
      stack.push(x);
    } else {
      // (가 없다는거니까 함수를 끝내고 NO가 콘솔에 표시됨
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  // ( 가 더 많으니 NO
  if (stack.length > 0) return "NO";
  return answer;
}

let a = "(()(()))(()";
console.log(solution(a));
// 20250215

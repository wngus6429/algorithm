function solution(beam) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < beam.length; i++) {
    if (beam[i] === '(') stack.push('(');
    else {
      stack.pop();
      if (beam[i - 1] === '(') answer += stack.length;
      else answer++;
      //stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
    }
  }
  return answer;
}

let a = '()(((()())(())()))(())';
console.log(solution(a));

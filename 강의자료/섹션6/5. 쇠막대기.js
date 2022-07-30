function solution(s) {
  // 강의 보는게 이해도가 높아짐.. 어렵다
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push('(');
    } else {
      stack.pop();
      console.log('s2', stack);
      // 레이저를 쏜거다
      if (s[i - 1] === '(') {
        answer += stack.length;
        console.log('answer', answer);
      } else {
        //막대기의 끝임,  ) 거니까. 앞에 레이저에 잘렸으니까 이것도 갯수로 쳐줘야지
        answer++;
      }
      //stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
    }
  }
  return answer;
}

let a = '()(((()())(())()))(())';
console.log(solution(a));

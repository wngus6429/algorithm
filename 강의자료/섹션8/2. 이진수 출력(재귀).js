// 10진수에서 2진수로 재귀를 사용해서 변환
function solution(n) {
  function DFS(num) {
    if (num === 0) return; // 0면 함수 끝냄
    else {
      let dec = num;
      return dec.toString(2);
    }
  }
  let answer = DFS(n);
  return answer;
}
console.log(solution(11));

// 2로 계속 나누고 나머지를 계속 남겨두면 2진수가되지
function solution2(n) {
  let answer = '';
  function DFS(n) {
    if (n === 0) return; // 이거 중요함.
    else {
      // console.log('엌', parseInt(n / 2));
      DFS(parseInt(n / 2));
      answer += String(n % 2);
    }
  }
  DFS(n);
  return answer;
}
console.log(solution2(11));

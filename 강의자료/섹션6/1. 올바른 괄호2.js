function solution(a) {
  let answer = "NO";
  let aa = 0;
  let bb = 0;
  // 단순히 ( 와 ) 의 갯수를 세어서 같은지 확인
  for (const x of a) {
    if (x === "(") {
      aa++;
    }
    if (x === ")") {
      bb++;
    }
  }
  if (aa === bb) {
    answer = "YES";
  }
  return answer;
}

let a = "(()(()))(()";
console.log(solution(a));
// 20250215 복습

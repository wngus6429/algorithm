function solution(a) {
  let answer = 'NO';
  let aa = 0;
  let bb = 0;
  for (const x of a) {
    if (x === '(') {
      aa++;
    }
    if (x === ')') {
      bb++;
    }
  }
  if (aa === bb) {
    answer = 'YES';
  }
  console.log(aa, bb);
  return answer;
}

let a = '(()(()))(()';
console.log(solution(a));

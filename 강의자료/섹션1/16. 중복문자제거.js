const problem = 'ksekksetjqerkjqkhqjktqjkj';
function solution(word) {
  let Array = [];
  for (const i of word) {
    Array.push(i);
  }
  setArray = new Set(Array); //결과는 객체다.
  console.log('객체로', setArray);
  answer = [...setArray]; //객체를 배열로
  let 정답 = answer.join(''); //배열을 문자열로
  return 정답;
}
console.log(solution(problem));
///////////////////////////////////////////////
function solutions(s) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
  // indexOf/lastIndexOf(item, pos) – pos부터 원하는 item을 찾음.
}
console.log(solutions('ksekkset'));
//! 20230324 복습

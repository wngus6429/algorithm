function solution(s) {
  let answer = 'YES';
  // a-z 사이를 제외하고 모두 없던걸로 한다.
  s = s.toLowerCase().replace(/[^a-z]/g, '');
  console.log(s);
  // 소문자 a부터 z까지 아닌것들을 찾아서 빈 문자열로
  if (s.split('').reverse().join('') !== s) {
    return 'NO';
  }
  return answer;
}
let problem = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(problem));
// 20220813 복습

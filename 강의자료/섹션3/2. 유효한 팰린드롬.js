let problem = "found7, time: study; Yduts; emiu, 7Dnuof";
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  // 소문자 a부터 z까지 아닌것들을 찾아서 빈 문자열로
  if (s.split("").reverse().join("") !== s) {
    return "NO";
  }
  return answer;
}
console.log(solution(problem));

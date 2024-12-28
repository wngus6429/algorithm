function solution(s) {
  let answer = "YES";
  //! a-z 사이를 제외하고 모두 없던걸로 한다.
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) {
    return "NO";
  }
  return answer;
}
let problem = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(problem));
// 20220813 복습
// 20230506 복습
// 20241228 복습

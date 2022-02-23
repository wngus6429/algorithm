const problem = "ksekksetjqerkjqkhqjktqjkj";
function solution(word) {
  let Array = [];
  for (const i of word) {
    Array.push(i);
  }
  setArray = new Set(Array); //결과는 객체다.
  answer = [...setArray]; //객체를 배열로
  let 정답 = answer.join(""); //배열을 문자열로
  return 정답;
}
console.log(solution(problem));
///////////////////////////////////////////////
function solutions(s) {
  let answer = "";
  //console.log(s.indexOf("K"));
  for (let i = 0; i < s.length; i++) {
    //console.log(s[i], i, s.indexOf(s[i]));
    if (s.indexOf(s[i]) === i) answer += s[i];
    // indexOf/lastIndexOf(item, pos) – pos부터 원하는 item을 찾음.
  }
  return answer;
}
console.log(solutions("ksekkset"));

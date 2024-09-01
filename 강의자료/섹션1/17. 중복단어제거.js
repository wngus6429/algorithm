let str = ["good", "time", "good", "time", "student"];
function solution(word) {
  const set = new Set(word); // 결과 set은 객체이다
  // 객체를 배열로 바꿔야함.
  const 정답 = [...set];
  return 정답;
}
console.log(solution(str));
////////////////////////////////////////////////////
function solutions(s) {
  let answer;
  answer = s.filter(function (v, i) {
    return s.indexOf(v) === i; //true, false 나오겠지
    // true 일떄 v를 리턴하겠지.
    // if(s.indexOf(v)===i) return true;
    // filter는 아이템과 index 두개 사용 가능
    // indexOf는 해당되는 첫요소의 인덱스 번호 리턴
  });
  return answer;
}
let strr = ["good", "time", "good", "time", "student"];
console.log(solutions(strr));
//! 20220813 복습
//! 20230324 복습

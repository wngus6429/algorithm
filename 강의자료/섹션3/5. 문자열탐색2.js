function solution(s) {
  let answer = "";
  let cnt = 1;
  s = s + " "; //맨 마지막 비교를 위해
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      cnt++;
    } else {
      console.log("확인", i, s[i]);
      answer += s[i];
      if (cnt > 1) {
        answer += String(cnt);
        cnt = 1;
      }
    }
  }
  return answer;
}
const 문제 = "KKHSSSSSSSE";
console.log(solution(문제));
// 20220812 복습
// 20230507 복습
// 20250202 복습

function solution(s, t) {
  let answer = [];
  let p = 1000;
  // 왼쪽 e에서 떨어진 거리를 먼저 구함
  for (let x of s) {
    if (x === t) {
      // t랑 같으면 0을 집어넣고
      p = 0;
      answer.push(p);
    } else {
      // t랑 같으면 ++ 해서 넣음.
      p++;
      answer.push(p);
    }
  }
  //console.log(answer); // [ 1001, 0, 1, 2, 3, 0, 1, 2, 3, 4, 0 ]
  p = 1000;
  // 오른쪽 e에서 떨어진 거리를 구한다.
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
      // 기존 0이니까 push안하고 그냥 지나감
    } else {
      p++;
      // 위에서 왼쪽에서 거리 구한거 인덱스 값이랑 비교해서
      // 작은걸 넣는다.
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}
const pro = 'teachermode';
const spell = 'e';
console.log(solution(pro, spell));
// 20220812 복습

// 그리디 문제
function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    // 2번쨰 숫자가 같을경우 시작시간으로 정렬하라
    if (a[1] === b[1]) return a[0] - b[0];
    // 아닐시 끝나는 시간으로 정렬하라.
    else return a[1] - b[1];
    // 근데 여기서는 위에 if문 줄은 실행이 안됨. 배열에 [1]위치 같은게 없음.
    // [3, 3], [1, 3], [2, 3] 의 답이 2가 나와야 해서 넣어둔거
  });
  console.log(meeting);
  let et = 0;
  // 배열 [1]의 숫자랑 배열[0]의 숫자 잇아이어야 되겟지
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));

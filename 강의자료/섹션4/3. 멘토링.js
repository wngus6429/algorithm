// 블루투포스, 전체탐색
function solution(test) {
  let answer = 0;
  let tmp = [];
  TestCount = test.length; // 시험 횟수
  StudentCount = test[0].length; // 학생수
  // 각 학생이 멘토가 되는 경우를 모두 탐색
  // 멘토는 멘티 보다 성적이 좋아야 한다.
  // 인덱스인 i는 멘토가 되는 학생의 번호 (1부터 n번까지)
  // 그냥 1부터 시작하는 이유는 학생 번호가 1부터 4까지니까
  for (let i = 1; i <= StudentCount; i++) {
    // 인덱스인 j는 멘티가 되는 학생의 번호 (1부터 n번까지)
    for (let j = 1; j <= StudentCount; j++) {
      let cnt = 0;
      // 아래 k는 시험 횟수만큼 0부터 TestCount-1까지 즉 0,1,2 3번 돌게 된다.
      // (i, j), 아래는 i(멘토)가 j(멘티) 보다 모든 테스트성적이 좋은지 확인
      for (let k = 0; k < TestCount; k++) {
        let pi = 0;
        let pj = 0;
        // s가 등수라고 생각
        // 인덱스인 s는 각 테스트에서의 등수 (0등부터 StudentCount-1등까지)
        for (let s = 0; s < StudentCount; s++) {
          //test[k][s]의 값은  k번째 테스트에서 s등을 하는 학생의 번호입니다. 즉
          // if(test[k][s]===i) 이 참이되면 s는 i번 학생의 등수가 되는 것이고 그것을 pi에 저장하는 것입니다.
          console.log(test[k][s]);
          // 따라서 pi는 멘토가 되는 i번 학생의 등수인 것입니다.
          if (test[k][s] === i) pi = s;
          // 그러면 pj는 멘티가 되는 j번 학생의 등수가 되겠죠.
          if (test[k][s] === j) pj = s;
        }
        // 답이 (3,1)이 있는데. 이 경우 pi는 0, pj는 2가 되어서
        // cnt가 증가하면서 멘토 멘티가 성립 되면서 카운트 증가
        if (pi < pj) cnt++;
      }
      // 모든 테스트에서 i가 j보다 성적이 좋으면 cnt가 TestCount와 같아지게 된다.
      if (cnt === TestCount) {
        tmp.push([i, j]);
        answer++;
      }
    }
  }
  console.log(tmp);
  return answer;
}
// 0번 인덱스가 보면 3번 학생이 1등
// 3번 학생 1등, 4번학생 2등, 1번학생 3등, 2번학생 4등
let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));

// 블루투포스, 전체탐색
function solution(test) {
  let answer = 0;
  let tmp = [];
  m = test.length; // 시험 횟수
  n = test[0].length; // 학생수
  // 멘토는 멘티 보다 성적이 좋아야 한다.
  // 인덱스인 i는 멘토가 되는 학생의 번호 (1부터 n번까지)
  for (let i = 1; i <= n; i++) {
    // 인덱스인 j는 멘티가 되는 학생의 번호 (1부터 n번까지)
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      // 시험 횟수만큼 돌린다.
      // 인덱스인 k는 수학 테스트 번호
      // (0번째 테스트부터 m-1번째 트스트까지)
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;
        // s가 등수라고 생각
        // 인덱스인 s는 각 테스트에서의 등수 (0등부터 n-1등까지)
        for (let s = 0; s < n; s++) {
          //test[k][s]의 값은  k번째 테스트에서 s등을 하는 학생의 번호입니다. 즉
          // if(test[k][s]===i) 이 참이되면 s는 i번 학생의 등수가 되는 것이고 그것을 pi에 저장하는 것입니다.
          // 따라서 pi는 멘토가 되는 i번 학생의 등수인 것입니다.
          // 그러면 pj는 멘티가 되는 j번 학생의 등수가 되겠죠.
          console.log("i", i, "j", j);
          console.log(test[k][s]);
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) {
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

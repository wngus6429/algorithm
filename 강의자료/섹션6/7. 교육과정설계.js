function solution(need, plan) {
  let answer = "YES";
  let queue = need.split("");
  console.log(queue);
  for (let x of plan) {
    // queue(필수과목) 확인하기
    if (queue.includes(x)) {
      // 필수과목 순서 안 맞음 NO
      // 어짜피 queue의 맨앞 삭제 해야하니 shift해서 비교하는게 맞응
      // queue의 내용이 shift로 인해서 삭제된다.
      if (x !== queue.shift()) return "NO";
      console.log("what", queue);
      // what [ 'B', 'A' ]
      // what [ 'A' ]
      // what []
    }
  }
  // 필수과목 수강 안 했을시, queue에 남아 있으니 NO
  if (queue.length > 0) return "NO";
  return answer;
}

let a = "CBA"; // 필수과목
let b = "CBDAGE"; // 모든과목
console.log(solution(a, b));
// 20250318

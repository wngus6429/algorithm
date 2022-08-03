function solution(need, plan) {
  let answer = 'YES';
  let queue = need.split('');
  for (let x of plan) {
    // queue(필수과목) 확인하기
    if (queue.includes(x)) {
      // 필수과목 순서 안 맞음 NO
      // 어짜피 queue의 맨앞 삭제 해야하니 shift해서 비교하는게 맞응
      if (x !== queue.shift()) return 'NO';
    }
  }
  // 필수과목 수강 안 했을시, queue에 남아 있으니 NO
  if (queue.length > 0) return 'NO';
  return answer;
}

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));

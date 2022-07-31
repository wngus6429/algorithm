function solution(need, plan) {
  let answer = 'YES';
  let queue = need.split('');
  for (let x of plan) {
    // queue(필수과목) 확인하기
    if (queue.includes(x)) {
      // 아직 queue 앞에 남아 있는게 있네?
      // 필수과목 순서 안 맞음 NO
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

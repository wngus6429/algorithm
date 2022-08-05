function solution(s) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    // 가지고 있다면, 해당값 1 추가, 기존값 가져와서 1추가지
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    // 가지고 있지 않다면
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    console.log(key, val);
    // val이 max보다 크면
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  console.log('결과', sH);
  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));

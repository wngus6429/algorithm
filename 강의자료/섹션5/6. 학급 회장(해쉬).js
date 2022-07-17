function solution(s) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    // 가지고 있다면
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    // 가지고 있지 않다면
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));

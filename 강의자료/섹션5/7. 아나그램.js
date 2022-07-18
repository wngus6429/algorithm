function solution(str1, str2) {
  let answer = 'YES';
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    // x를 가지고 있지 않거나, 0일 경우, NO
    if (!sH.has(x) || sH.get(x) === 0) return 'NO';
    // 하나씩 차감
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}
let a = 'AbaAeCe';
let b = 'baeeACA';
console.log(solution(a, b));

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}
function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  // 기본 비교대상 Map을 만들어둔다.
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = t.length - 1; // len은 2, 그래야 밑에서 for3번 돌리지
  for (let i = 0; i < len; i++) {
    // s[i]를 보고 sH에 들어있으면 1 추가하고
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    // 없으면 새롭게 추가한다.
    else sH.set(s[i], 1);
  }
  // 맨 왼쪽 위치 하나 잡아주고
  let lt = 0;
  // 위에 len = 2부터 시작해서 s 최대 길이만큼 돌린다.
  for (let rt = len; rt < s.length; rt++) {
    console.log('전', s[rt], sH);
    // sH 해쉬변수에 s[rt]가 있으면, 추가한다.
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    // 그렇지 않으면 새로 세팅한다.
    else sH.set(s[rt], 1);
    console.log('후', s[rt], sH);
    // 비교해서 같으면 answer++
    if (compareMaps(sH, tH)) answer++;
    // sH안에서 s[lt]를 찾아서 1뺀다.
    sH.set(s[lt], sH.get(s[lt]) - 1);
    // 만약 s[lt]가 0이 되면 요소 key 삭제하고 lt 1증가
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));

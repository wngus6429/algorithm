function solution(s) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    // 가지고 있다면, 해당값 1 추가, 기존값 가져와서 1추가지
    // has는 true 아니면 false가 나온다.
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    // 가지고 있지 않다면, 새로운 값을 Map 변수에 세팅
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    console.log(key, val); // B 3, A 3, C 5, D 2, E 2
    // val이 max보다 크면
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  console.log("결과", sH);
  // 결과 Map(5)
  // { 'B' => 3, 'A' => 3, 'C' => 5, 'D' => 2, 'E' => 2 }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
// 20250211 복습

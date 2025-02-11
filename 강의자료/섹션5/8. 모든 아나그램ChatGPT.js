// 두 Map(해시맵)이 동일한지 비교하는 함수
function compareMaps(map1, map2) {
  // 두 맵의 크기가 다르면 바로 false
  if (map1.size !== map2.size) return false;
  // map1의 모든 [키, 값] 쌍이 map2에 동일하게 존재하는지 확인
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  // T 문자열의 문자 빈도수를 저장할 해시맵
  let tH = new Map();
  // S 문자열의 현재 윈도우에 대한 문자 빈도수를 저장할 해시맵
  let sH = new Map();

  // T 문자열의 각 문자의 빈도수를 tH에 기록
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  // tH의 값 예: {'a': 1, 'b': 1, 'c': 1} (입력 예제의 경우)
  console.log("tH의 Map값", tH);

  // S 문자열에서 슬라이딩 윈도우를 구성하기 전에,
  // 처음 t.length - 1 개의 문자를 미리 sH에 넣어둡니다.
  //! 나중에 메인 루프에서 s[2]를 추가하면 sH랑 tH랑 같아지면서 바로 answer++ 하겠지
  //! Map(2) { 'b' => 1, 'a' => 1 } 가 Map(3) { 'b' => 1, 'a' => 1, 'c' => 1 }가 되면서
  //! tH의 값 { 'a' => 1, 'b' => 1, 'c' => 1 } 랑 일치
  let len = t.length - 1; // 예를 들어 t가 "abc"이면 len은 2
  for (let i = 0; i < len; i++) {
    // S의 첫 번째부터 (t.length - 1)번째 문자까지 해시맵에 추가
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  // 이 시점에서 sH는 S의 인덱스 0부터 len-1까지의 문자 빈도수를 가지고 있음.
  console.log("sH의 Map값", sH); // Map(2) { 'b' => 1, 'a' => 1 }

  // 3. 슬라이딩 윈도우 기법을 사용하여 S의 각 부분문자열(길이 t.length)을 확인
  let lt = 0; // 윈도우의 왼쪽(시작) 인덱스
  // rt (오른쪽 인덱스)는 len부터 시작
  // 이유: 앞서 sH에 미리 t.length - 1 개의 문자를 넣었으므로,
  //       rt가 len 인덱스의 문자를 추가하면 윈도우의 크기는 정확히 t.length가 됨.
  for (let rt = len; rt < s.length; rt++) {
    console.log("윈도우 확장 전, 현재 rt:", s[rt], ", sH:", sH);

    // (a) 현재 rt 인덱스의 문자를 sH에 추가하여 윈도우를 완성
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    console.log("윈도우 확장 후, 추가한 rt:", s[rt], ", sH:", sH);

    // (b) 완성된 윈도우(길이 t.length)의 문자 구성(sH)이 tH와 동일한지 비교
    if (compareMaps(sH, tH)) answer++;

    // (c) 윈도우를 오른쪽으로 이동하기 위해, 현재 윈도우의 가장 왼쪽 문자(s[lt])를 제거
    sH.set(s[lt], sH.get(s[lt]) - 1);
    // 만약 그 문자의 빈도수가 0이 되면, map에서 완전히 삭제 (다음 비교 시 map 크기가 달라지면 바로 false가 됨)
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++; // 윈도우의 왼쪽 경계를 오른쪽으로 이동
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b)); // 결과: 3

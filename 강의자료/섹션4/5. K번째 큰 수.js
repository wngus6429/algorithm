function solution(n, k, card) {
  let answer;
  let tmp = new Set(card); // 같은 숫자가 있을수도 있기에 set, 객체로 나옴
  // 3개의 범위로 돌려라 돌려.
  console.log("tmp", tmp);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let g = j + 1; g < n; g++) {
        // set 객체에 데이터 넣는건 add 이다
        tmp.add(card[i] + card[j] + card[g]);
      }
    }
  }
  // set은 sort지원안함, 그래서 Array.from 사용해서 sort 사용
  let a = Array.from(tmp).sort((a, b) => b - a);
  console.log("a", a);
  answer = a[k - 1]; // 3번째니까 인덱스로는 2를 만들어줘야지
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
// 20250208 복습

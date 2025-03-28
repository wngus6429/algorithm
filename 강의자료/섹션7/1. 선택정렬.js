function solution(arr) {
  let answer = arr;
  // arr[i] 가 0번부터
  // arr[j] 가 1번부터 쭉 돈다
  // arr[i]와 arr[j]를 비교해서 작은 숫자를 arr[i]에 고정하는 방식
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      // arr[j]가 작으면 idx에 j를 넣는다
      if (arr[j] < arr[idx]) idx = j;
    }
    // 값 바꾸기, 최신 문법이라함
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  // arr을 바꾸면 answer도 바뀌어 있음
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
// 20250328 복습

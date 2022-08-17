function solution(arr) {
  let answer = arr;
  arr.sort((a, b) => {
    console.log(a, b);
    // x쪽이 같을경우 b로 정렬한다.
    if (a[0] === b[0]) return a[1] - b[1];
    // 그렇지 않을경우 평범하게 x로 정렬한다.
    else return a[0] - b[0];
  });
  return answer;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));

function solution(arr) {
  // 버블정렬 하는거임
  // 그냥 단순히 비교해서 마이너스는 앞으로 ㅋㅋ
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
// 20250331 복습

//! 음수들 먼저 push하고 그 다음에 양수 push방법
function solution2(arr) {
  let answer = [];
  for (let x of arr) {
    if (x < 0) answer.push(x);
  }
  for (let x of arr) {
    if (x > 0) answer.push(x);
  }
  return answer;
}

let arr2 = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution2(arr2));
// 20250331 복습

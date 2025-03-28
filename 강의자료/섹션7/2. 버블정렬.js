function solution(arr) {
  let answer = arr;
  // 끝에걸 할 필요가 없으므로 -1 을 해주는것임
  // 예를들어 인덱스 0 이랑 1이랑 비교해서 바꿔주는 방식
  // 0과1, 1과2, 2와3 이런식으로 쭉쭉 비교를함
  //! 맨 뒤 인덱스 값을 구하면서 내려오는 방법이다.
  //! 예를 들어 인덱스가 5까지 있으면 5 구하고, 4구하고, 3구하고 등등
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // 앞에 인덱스와 자리값 바꿈
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}
let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
// 20250328 복습

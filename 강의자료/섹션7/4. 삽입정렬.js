function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i]; // arr[i]을 처음에 초기화해서 비교하는거
    let j = 0; // 밑에 for안에서 let j 하면 14줄을 못 쓰니까.
    for (j = i - 1; j >= 0; j--) {
      // 참이면 복사해서 한칸 앞에 값을 복사해서 넣음.
      // i (tmp) 랑 j랑 비교해서 j가 크면 오른쪽으로 한칸땡김
      // 하다가 tmp가 arr[j] 보다 크면 arr[j+1]에 tmp를 넣음.
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break; // arr[j]지점은 tmp 보다 작은거임.
    }
    // 그래서 arr[j +1] 지점에다가 넣어야함
    arr[j + 1] = tmp;
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));

// function solution(arr) {
//   let answer = [];
//   answer.push(arr[0]);
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = 0; j < answer.length; j++) {
//       if (arr[i] < answer[j]) {
//         answer.splice(j, 0, arr[i]);
//         break;
//       }
//     }
//   }
//   return answer;
// }

// let arr = [11, 7, 5, 6, 10, 9];
// console.log(solution(arr));

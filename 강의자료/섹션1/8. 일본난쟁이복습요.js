// function solution(arr) {
//   let answer = arr;
//   let arrSum = arr.reduce((a, b) => a + b, 0);
//   for (let i = 0; i < arr.length; i++) {
//     for (let g = 1; g < arr.length; g++) {
//       if (arrSum - (arr[i] + arr[g]) === 100) {
//         answer.splice(i, 1);
//         answer.splice(g, 1);
//       }
//     }
//   }
//   return answer;
// }

// let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
// console.log("정답", solution(arr));

function solution(arr) {
  // 전체 난쟁이들의 키 합계
  let arrSum = arr.reduce((a, b) => a + b, 0);

  // 두 난쟁이를 찾는 이중 반복문
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // 두 난쟁이의 합을 뺀 나머지 일곱 난쟁이의 키 합이 100인 경우
      if (arrSum - (arr[i] + arr[j]) === 100) {
        // 두 난쟁이를 배열에서 제거
        return arr.filter((_, idx) => idx !== i && idx !== j);
      }
    }
  }
  return [];
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log("정답", solution(arr));

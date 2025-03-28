function solution(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
// 20250328 복습

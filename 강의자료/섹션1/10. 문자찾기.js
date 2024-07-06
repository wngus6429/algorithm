function solution(str, what) {
  let count = 0;
  for (const i of str) {
    if (i === what) {
      count += 1;
    }
  }
  return count;
}

let situmon = "COMPUTERPROGRAMMING";
console.log(solution(situmon, "R"));
//! 20240706 복습

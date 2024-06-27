const solution = (day, arr) => {
  return arr.filter((item) => item % 10 === day).length;
};
arr = [25, 23, 11, 47, 53, 17, 33];
console.time();
console.log(solution(3, arr));
console.timeEnd();
//! 20230324 복습
//! 20240628 복습
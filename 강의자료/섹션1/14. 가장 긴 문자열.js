function calcul(str) {
  let answer = "";
  for (let nakami of str) {
    if (nakami.length > answer.length) {
      answer = nakami;
    }
  }
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(calcul(str));
//! 20230324 복습
//! 20240901 복습

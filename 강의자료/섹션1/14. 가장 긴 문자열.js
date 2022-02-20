function calcul(str) {
  let max = Number.MIN_SAFE_INTEGER;
  let answer = "";
  for (let nakami of str) {
    if (nakami.length > max) {
      max = nakami.length;
      answer = nakami;
    }
  }
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(calcul(str));

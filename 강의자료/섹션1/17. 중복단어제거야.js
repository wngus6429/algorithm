function solutions(arr) {
  let answer = [];
  for (let ww of arr) {
    if (!answer.includes(ww)) {
      answer.push(ww);
    }
  }
  return answer;
}
let strr = ["good", "time", "good", "time", "student"];
console.log(solutions(strr));
//! 20240901 복습

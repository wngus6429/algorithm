// const problem = "gooG";
// function solution(word) {
//   let word1 = "";
//   let word2 = "";
//   word1 = word.toUpperCase();
//   word2 = word.split("").reverse().join("").toUpperCase();
//   // 바로 reverse()가 안되더라
//   if (word1 === word2) {
//     return "YES";
//   }
// }
// console.log(solution(problem));
const problem = "gooog";
function solution(word) {
  let answer = "YES";
  word = word.toLowerCase();
  let len = word.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    // 인덱스0과 맨끝 인덱스에서 모아져옴
    if (word[i] !== word[len - i - 1]) {
      return "NO";
    }
    return answer;
  }
}
console.log(solution(problem));

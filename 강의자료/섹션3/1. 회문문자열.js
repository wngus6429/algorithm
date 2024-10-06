const problem = "gooG";
function solution(word) {
  const word1 = word.toUpperCase();
  const word2 = word.split("").reverse().join("").toUpperCase();
  // 바로 reverse()가 안되더라
  if (word1 === word2) {
    return "YES";
  } else {
    return "NO";
  }
}
console.log(solution(problem));

function solution2(word) {
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
const problem2 = "goooGt";
console.log(solution2(problem2));
// 20220813 복습
// 20241006 복습

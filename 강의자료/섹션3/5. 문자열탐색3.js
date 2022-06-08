const word = 'KKHSSSSSSSE';
function solution(word) {
  let answer = '';
  let stack = 1;
  word = word + ' ';
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i + 1]) {
      stack++;
    } else {
      answer += word[i];
      if (stack > 1) {
        answer += String(stack);
        stack = 1;
      }
    }
  }
  return answer;
}
console.log(solution(word));

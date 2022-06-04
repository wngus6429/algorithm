const gg = 'gowfwrk';
function middle(word) {
  let answer = '';
  if (word.length % 2 === 0) {
    answer = word[word.length / 2 - 1] + word[word.length / 2];
  } else {
    answer = word[Math.floor(word.length / 2)];
  }
  return answer;
}
console.log(middle(gg));

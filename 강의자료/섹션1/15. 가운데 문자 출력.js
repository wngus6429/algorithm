const gg = "gowywrk";
function middle(word) {
  let answer = "";
  if (word.length % 2 === 0) {
    answer = word.substr(word.length / 2 - 1, 1) + word.substr(word.length / 2, 1);
  } else {
    answer = word.substr(word.length / 2, 1);
  }
  return answer;
}
console.log(middle(gg));

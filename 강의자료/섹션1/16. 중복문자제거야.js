function what(word) {
  let answer = [];
  for (let ww of word) {
    if (!answer.includes(ww)) {
      answer.push(ww);
    }
  }
  return answer.join("");
}

let word = "ksekkset";
console.log(what(word));

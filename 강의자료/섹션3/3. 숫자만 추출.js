function solution(word) {
  let answer = [];
  for (let i = 0; i < word.length; i++) {
    // for(let w of word)
    if (!isNaN(word[i])) {
      answer.push(word[i]);
    }
  }
  console.log(answer);
  answer = answer.join('');
  return Number(answer); //parseInt
}
let word = 'g0en2Tjghjgr656575erdgdfgw4240s8eSof02t';
console.log(solution(word));

// let word = 'g0en2T0s8eSof02t';
// function solution(word) {
//   let answer = 0;
//   for (let x of word) {
//     if (!isNaN(x)) {
//       answer = answer * 10 + Number(x);
//       console.log(answer);
//     }
//   }
//   return answer;
// }
// console.log(solution(word));
// 20220813 복습
// 20230507 복습

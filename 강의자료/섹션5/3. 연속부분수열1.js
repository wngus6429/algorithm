function solution(arr1, MaxNum) {
  let answer = 0;
  let answerArray = [];
  let tempArray = [];
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let g = i; g < arr1.length; g++) {
      tempArray.push(arr1[g]);
      sum = sum + arr1[g];
      if (sum === MaxNum) {
        answer += 1;
        sum = 0;
        answerArray.push(tempArray);
        tempArray = [];
      }
      if (sum > MaxNum) {
        sum = 0;
        tempArray = [];
        continue;
      }
    }
  }
  console.log(answerArray);
  return answer;
}
let MaxNum = 6;
let word = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(word, MaxNum));

function solution(array) {
  var answer = 0;
  for (let i = 0; i < array.length; i++) {
    let str = String(array[i]);
    for (let g = 0; g < str.length; g++) {
      if (str[g] === '7') {
        answer++;
      }
    }
  }
  return answer;
}
function solution2(array) {
  return array.join('').split('7').length - 1;
}

console.log(solution([7, 77, 17]));

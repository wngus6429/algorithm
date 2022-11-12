function solution(my_str, n) {
  let answer = [];
  let tmp = '';
  let count = 0;
  for (let i = 0; i < my_str.length; i++) {
    tmp += my_str[i];
    count += 1;
    if (count === n) {
      answer.push(tmp);
      tmp = '';
      count = 0;
    }
  }
  if (tmp !== '') {
    answer.push(tmp);
  }
  return answer;
}
function solution2(my_str, n) {
  let res = [];
  for (let i = 0; i < my_str.length; i += n) res.push(my_str.slice(i, i + n));
  return res;
}
console.log(solution('abcdef123', 3));

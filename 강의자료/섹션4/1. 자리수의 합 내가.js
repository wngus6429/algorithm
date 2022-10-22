// 풀던중
function solution(arr) {
  let answertmp = 0;
  let answer = 0;
  // 한개씩 계산한다.
  for (let x of arr) {
    // 숫자 뒤집기
    let stringNum = x.toString().split('').reverse().join('');
    // console.log(stringNum)
    let tmp = 0;
    // 각 자리값을 tmp에 더하기
    for (let value of stringNum) {
      tmp += Number(value);
    }
    // 가장 큰수를 answertmp에 넣는다.
    // 그리고 answer에 원래의 숫자를 넣는다. 참고로 덮어씌우기로 하면됨
    if (answertmp < tmp) {
      answertmp = tmp;
      answer = x;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123, 899, 895];
console.time();
console.log(solution(arr));
console.timeEnd();

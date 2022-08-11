// 풀던중
function solution(arr) {
  let answer = 0;
  let tmpArrValue;
  for (let x of arr) {
    tmpArrValue = x; // 기존 값을 넣어둠
    let stringNum = x.toString().split('').reverse().join('');
    let tmp = 0;
    for (let value of stringNum) {
      tmp += Number(value);
    }
    if (answer < tmp) {
      answerValue = x;
    } else {
      tmpArrValue = 0;
    }
  }
  return tmpArrValue;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));

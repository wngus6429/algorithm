function solution(day, arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    let check = arr[i].toString();
    if (Number(check.slice(1)) === day) {
      answer.push(check);
    }
  }
  return answer.length;
}
day = 3;
arr = [25, 23, 11, 47, 53, 17, 33];
console.time();
console.log("정답", solution(day, arr));
console.timeEnd();

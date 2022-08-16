function solution(arr) {
  let answer = [];
  let sortArr = arr.slice();
  sortArr.sort((a, b) => a - b);
  // 소트하기 전과 후의 것을 비교해서
  // 몇번쨰 인지를 i 로 알아냄, 대신 번호는 컴퓨터가 아니라 1을 추가 해줘야함.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }
  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));

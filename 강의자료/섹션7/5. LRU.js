function solution(size, arr) {
  // answer의 배열에 size의 크기만큼 0의 배열을 만들어둔다.
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((x) => {
    // x의 값이 캐쉬에 있는지 확인.
    let pos = -1;
    for (let i = 0; i < size; i++) {
      if (x === answer[i]) pos = i;
    } // -1의 경우 캐쉬에 없다는게 되지
    // 왼쪽에서 오른쪽으로 쭉쭉 땡겨야제
    if (pos === -1) {
      // 인덱스 번호 차이 땜에 size - 1 이 발생
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      } // pos가 -1이 아닌거는 캐쉬메모리 안에들어 있다는 거니까.
    } else {
      // pos위치 까지 왼쪽에 있는 값을 오른쪽으로 땡기고
      // 첫번째에 넣어주는거지 흐흐흐
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });
  return answer;
}
let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));

function solution(size, arr) {
  let answer = [];
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      // 간단한 방법으로 맨 왼쪽에 넣고 맨 오른쪽 삭제
      answer.unshift(x);
      if (answer.length > size) answer.pop();
    } else {
      // pos 해당지점을 지우고 값을 맨 앞에 넣으면 되넹
      answer.splice(pos, 1);
      answer.unshift(x);
    }
  });
  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));

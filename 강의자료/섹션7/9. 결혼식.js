function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let T_line = [];
  for (let x of times) {
    T_line.push([x[0], 's']); // s가 온 시간
    T_line.push([x[1], 'e']); // e가 간 시간
  }
  // 정렬 sort해준다.
  console.log(T_line);
  T_line.sort((a, b) => {
    // 앞에 숫자가 일치하면, 뒤에걸로 정렬한다. 위에 s냐 e냐 라서
    // charCodeAt 기준으로 정렬해야함.
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    // 앞의 숫자가 일치하는게 없으면 그냥 순서대로
    else return a[0] - b[0];
    // 즉 앞에 숫자로 정렬을 하고 숫자가 같으면 뒤에 문자로 정렬 s가 앞에
  });
  console.log(T_line);
  // 숫자 증가, 하락 방식
  // 사람 오면 1증가 사람 가면 1하락
  let cnt = 0;
  for (let x of T_line) {
    if (x[1] === 's') cnt++;
    else cnt--;
    // answer랑 cnt 둘중에 큰 값을 비교해서 큰 숫자를
    // 다시 answer 쪽으로 넣는거지.
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log('답', solution(arr));

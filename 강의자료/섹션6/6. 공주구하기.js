function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  console.log("본처", queue); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
  // queue 내용이 텅비면 멈추겟지
  while (queue.length) {
    console.log("2개 뒤로 빼기전", queue);
    for (let i = 1; i < k; i++) {
      // queue에서 앞에서 2개를 차례로 뒤로 넣는다.
      queue.push(queue.shift());
    }
    console.log("2개 뒤로 뺀 후", queue);
    queue.shift(); // 한개 그냥 빼버림.
    console.log("3 외친놈 뺀후", queue);
    // 한개가 남으면 정답임.
    if (queue.length === 1) {
      answer = queue.shift();
    }
  }
  return answer;
}
// 1,2,3을 배열 인덱스 0부터 끝까지 계속 외치는데
// 1,2 외친놈은 뒤로 넘기고, 3을 외친놈을 없애는거임
console.log("정답", solution(8, 3));
// 20250318 복습

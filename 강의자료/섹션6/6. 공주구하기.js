function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i * 1);
  console.log('본처', queue); // [ 0, 1, 2, 3, 4, 5, 6, 7 ]
  while (queue.length) {
    for (let i = 1; i < k; i++) {
      // queue에서 앞에서 2개를 차례로 뒤로 넣는다.
      queue.push(queue.shift());
    }
    console.log('빼기전', queue);
    queue.shift(); // 한개 그냥 빼버림.
    console.log('뺀후', queue);
    // 한개가 남으면 정답임.
    if (queue.length === 1) {
      answer = queue.shift();
    }
  }
  return answer;
}

console.log('정답', solution(8, 3));

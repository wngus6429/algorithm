function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i * 1);
  console.log('본처', queue);
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    console.log('d', queue);
    queue.shift();
    console.log('쉬', queue);
    if (queue.length === 1) {
      console.log('실행');
      answer = queue.shift();
    }
  }
  return answer;
}

console.log(solution(8, 3));

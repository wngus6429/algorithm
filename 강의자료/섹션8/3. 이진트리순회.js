function solution(n) {
  let answer = '';
  function DFS(v) {
    if (v > 7) return;
    else {
      answer += v + ' ';
      DFS(v * 2); // 1, 2, 4, 8
      console.log(v);
      DFS(v * 2 + 1); //
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));

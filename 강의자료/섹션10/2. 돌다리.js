function solution(n) {
  let answer = 0;
  let Arr = Array.from({ length: n + 1 }, () => 0);
  Arr[1] = 1;
  Arr[2] = 2;
  console.log(Arr);
  for (let i = 3; i <= n; i++) {
    Arr[i] = Arr[i - 2] + Arr[i - 1];
  }
  answer = Arr[n];
  return answer;
}
console.log(solution(7));

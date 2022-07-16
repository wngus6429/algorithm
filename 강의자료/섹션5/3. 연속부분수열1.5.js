function solution(m, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    // sum이 원하는 숫자에 해당할 경우
    if (sum === m) answer++;
    // sum이 원하는 수보다 클 경우
    // lt가 증가하면서 원래 위치에 있던 arr[lt]를 빼준다
    // 즉 sum이 m보다 크면 lt를 증가시키며 기존 arr[lt]를 빼고
    // sum보다 m이 클 경우 rt를 증가시키며 증가시킨 후에 더한다 arr[rt]
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

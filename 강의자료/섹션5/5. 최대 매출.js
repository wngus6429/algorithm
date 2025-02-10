function solution(k, arr) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    // 한칸 앞으로 나갔으면 맨 뒤쪽도 빼줘야 하니까.
    console.log(arr[i]);
    // 한칸씩 큰숫자 더하고, 한칸씩 큰숫자 빼고
    // arr[3] - arr[0] , arr[4] - arr[1], arr[5] - arr[2]
    console.log("값", arr[i] - arr[i - k]);
    sum += arr[i] - arr[i - k]; // 3칸씩 앞으로 밀고감
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));

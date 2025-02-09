//! 투포인트 알고리즘
// lt랑 rt를 만들어두고, 원하는 숫자보다 sum이 크면 lt를 빼고 한칸 올리고
// 원하는 숫자보다 더한게 작으면 rt를 늘리고 sum에 넣는다
function solution(m, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0;
  let subarrays = []; // 정답 부분 수열을 저장할 배열
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    // sum이 원하는 숫자에 해당할 경우
    if (sum === m) {
      answer++;
      subarrays.push(arr.slice(lt, rt + 1)); // 부분 배열 저장
    }
    // sum이 원하는 수보다 클 경우
    // lt가 증가하면서 원래 위치에 있던 arr[lt]를 빼준다
    // 즉 sum이 m보다 크면 lt를 증가시키며 기존 arr[lt]를 빼고
    // sum보다 m이 클 경우 rt를 증가시키며 증가시킨 후에 더한다 arr[rt]
    while (sum >= m) {
      // arr[lt]를 빼고나서 lt를 증가시키는거임.
      sum -= arr[lt];
      lt++;
      if (sum === m) {
        // 위에꺼 빼웠으니 확인 또 해줘야지
        answer++;
        subarrays.push(arr.slice(lt, rt + 1)); // 부분 배열 저장
      }
    }
  }
  console.log("부분 수열들:", subarrays);
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
// 20250209 복습

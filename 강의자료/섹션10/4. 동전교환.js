// 더 좋은걸로 바꾸는게 다이나믹
function solution(m, coin) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 1000);
  dy[0] = 0;
  for (let i = 1; i < arr.length; i++) {
    // 코인 1, 2, 5원 일떄 쭉 돌리고,
    // 더 나은걸로 교체 해가는 방식
    for (let j = coin[i]; j <= m; j++) {
      // 숫자가 작아야겠지
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
    console.log(dy);
  }
  answer = dy[m];
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));

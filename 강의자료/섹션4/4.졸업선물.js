// 모든 경우 탐색, 완전 탐색
// 어떤 상품을 할인 받을건지, 각 상품 할인 받은 모든 경우의수 게산
function solution(m, product) {
  let answer = 0; // 카운팅이니까 0으로 초기화
  let n = product.length; // 사람의 숫자
  // 최대 몇명까지 사줄수 있는가를 구하는거니까.
  // 제일 싼거부터 구입하면 더 많이 사줄수 있으니 작은수 차례로 배열
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  // i 번쨰의 상품이 할인을 받는다
  for (let i = 0; i < n; i++) {
    // 각 상품 가격을 할인해서 비용을 계산해보는거임
    let money = m - (product[i][0] / 2 + product[i][1]);
    console.log('머니', money); // 25, 23, 21, 19, 20
    let cnt = 1; // 최소한 1개 이상 상품 살수 있는 전제
    for (let j = 0; j < n; j++) {
      // 예산 금액으로 몇명까지 사줄수 있는지 구함
      if (j !== i && product[j][0] + product[j][1] > money) {
        // 예산 금액보다 비싸면 못 사주니까 스톱이지
        break;
      }
      // 예산보다 작은 비용이니까 사줄수 있는거지.
      if (j !== i && product[j][0] + product[j][1] <= money) {
        // 가진 예산에서 상품 구입 가격 + 배송비를 빼주고
        money -= product[j][0] + product[j][1];
        // 사줄수 있으니까 사줄수 있는 사람 수 증가.
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
    // answer = cnt;
  }
  return answer;
}
// 학생수 5명, 예산 28
let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));

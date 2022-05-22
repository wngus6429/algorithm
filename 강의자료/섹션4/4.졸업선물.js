// 모든 경우 탐색, 완전 탐색
// 어떤 상품을 할인 받을건지, 각 상품 할인 받은 모든 경우의수 게산
function solution(m, product) {
  let answer = 0; // 카운팅이니까 0으로 초기화
  let n = product.length; // 사람의 숫자
  // 가격과 배송비로 오름차순 구함
  product.sort((a, b) => (a[0]+a[1]) - (b[0]+b[1]));
  // i 번쨰의 상품이 할인을 받는다
  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1])
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      // j번째를 사는 상품이 예산보다 크면 브레이크, 
      // 정렬되어 있어서 밑에것들은 더 비싸니까
      if (j !== i && (product[j][0] + product[j][1]) > money) {
        break;
      }
      // 총 비용이 남은 예산보다는 크거나 같아야지
      if (j !== i && (product[j][0] + product[j][1]) <= money){
        money -= (product[j][0] + product[j][1])
        cnt++
      }
    }
    answer = Math.max(answer, cnt)
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));

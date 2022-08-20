// 순차 탐색은 for문 돌려서 하나하나 다 확인하는거
// 맨마지막에 찾는게 있을경우 오래걸린다. O (n)
// 이분검색의 경우 o(logn)
// 맨 왼쪽과 맨 오른쪽 인덱스의 가운데 인덱스를 구해서
// 그 가운데 숫자와 자신이 찾을려고 하는 숫자와 비교해서
// 왼쪽 으로 갈지 오른쪽으로 갈지 정하는 방법이다.
function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b); // 오름차순 해야 이분검색이 됨.
  let lt = 0;
  let rt = arr.length - 1; // 인덱스 번호니까 -1 해줘야지
  while (lt <= rt) {
    // 처음에는 맨 왼쪽, 맨 오른쪽 / 2
    let mid = parseInt((lt + rt) / 2);
    // 찾았으니까
    if (arr[mid] === target) {
      answer = mid + 1; //인덱스 번호니까
      break; // 중지
      // target이 작다는거는 중앙보다 왼쪽에 있다는 거니까.
    } else if (arr[mid] > target) rt = mid - 1;
    // 타겟이 클 경우 중앙보다 오른쪽에 있으니
    else lt = mid + 1;
  }

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));

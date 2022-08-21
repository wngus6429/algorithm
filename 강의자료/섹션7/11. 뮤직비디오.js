function count(songs, capacity) {
  // 특정 용량으로 몇장 담을수 있는지 확인
  let cnt = 1; // DVD 장수
  let sum = 0; // DVD에 누적되는 용량
  for (let x of songs) {
    if (sum + x > capacity) {
      //저장 할수 없음. 그래서 DVD추가
      cnt++;
      sum = x; // cnt 증가 했으니까
    } else sum += x;
  }
  // mid의 특정용량에 몇개의 DVD를 최대 담을수 있는지 결과
  return cnt;
}

function solution(m, songs) {
  let answer;
  // 최소 곡 한개가 들어가는 용량이므로 제일 긴 노래가 9분짜리
  let lt = Math.max(...songs);
  // 전부 합친 최대 노래 길이를 reduce로 정한다.
  let rt = songs.reduce((a, b) => a + b, 0);
  // 이분 탐색 적용 그냥 외워버려라.
  while (lt <= rt) {
    // mid가 DVD 한장 용량 값이라고 생각하면 된다.
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}
// 3장으로 DVD를 만들시 곡을 몇분 넣어야 하는가.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));

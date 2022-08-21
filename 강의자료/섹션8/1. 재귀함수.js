// 스택이 아래에서 부터
// DFS(3), DFS(2), DFS(1), DFS(0) 이렇게 쌓아올려짐
// DFS(0) 일때 return이 되어서 밀려져 있는게 실행
function solution(n) {
  function DFS(L) {
    // L이 0일 경우 함수를 끝낸다.
    // 이 구문 안 넣어주면 무한반복임
    if (L == 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(n);
}
solution(5);

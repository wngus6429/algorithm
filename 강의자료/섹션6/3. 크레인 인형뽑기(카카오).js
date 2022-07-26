function solution(board, moves) {
  let answer = 0;
  let stack = [];
  // moves의 길이만큼 돈다.
  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      // pos에 -1 하는건 인덱스 번호 때문임
      //인형을 만난거임
      if (board[i][pos - 1] !== 0) {
        // 임시로 넣어준다.
        let tmp = board[i][pos - 1];
        // 뺏으니까 0으로 만들어줘서 비었다고 표시한다.
        board[i][pos - 1] = 0;
        // 뺀거랑 stack의 마지막이랑 같은지 확인
        if (tmp === stack[stack.length - 1]) {
          // 같으면 빼고, answer에 더한다.
          // tmp는 안 들어갔으니까 그냥 둘다 같은지 확인만하고 마지막꺼 빼면됨
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        // 한개씩만 뽑고 넣고 해야하니까. 아니면 그 줄에 있는거 다 뽑음
        break;
      }
    }
  });

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));

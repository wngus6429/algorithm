function solution(word) {
  let answer = '';
  let stack = 1;
  word = word + ' '; // 맨 마지막 비교를 위해 빈 공간 만듬
  for (let i = 0; i < word.length; i++) {
    // 한칸 오른쪽과 비교해서 같으면 스택추가
    if (word[i] === word[i + 1]) {
      stack++;
      // 그르치 않으면 뒤에 같은게 없다는거니 answer에 추가
    } else {
      answer += word[i];
      // 추가하고 stack의 길이가 1 이상이면
      // 문자열로 바꾸고 넣어준다. 그리고 stack초기화
      if (stack > 1) {
        answer += String(stack);
        stack = 1;
      }
    }
  }
  return answer;
}
const word = 'KKHSSSSSSSE';
console.log(solution(word));

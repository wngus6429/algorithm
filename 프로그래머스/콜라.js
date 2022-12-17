function solution(a, b, n) {
    let answer = 0;
    let 빈병수 = n;
    while (true) {
      if(a > 빈병수) {
        break;
      }
      //빈병에서 교환갯수를 나눠서 받는 콜라 갯수 구함.
      console.log('빈병수', 빈병수)
      answer += parseInt(빈병수/a)*b;
      console.log('콜라수', answer)
      // 남아 있는 빈병 갯수를 구함.
      // 받는 콜라 갯수에 남아있는거까지 더함.
      // 그리고 위에서 콜라 받는거 계산.
      빈병수 = parseInt(빈병수/a)*b + 빈병수%a
    }

    return answer;
}
console.log(solution(2, 1, 20))
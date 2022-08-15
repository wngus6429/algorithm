function solution(a, b, c) {
  let answer = 'YES';
  let max; //가장 긴막대
  let sum = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (sum - max <= max) answer = 'NO';
  //삼각형 될수 없는 상황, 제일 긴 막대가, 나머지 두개 막대의 합보다 이하 여야함
  //sum - max를 함으로서 제일긴 막대를 제외한 2개 막대 합을 알수 있지
  return answer;
}
console.log(solution(13, 20, 17));

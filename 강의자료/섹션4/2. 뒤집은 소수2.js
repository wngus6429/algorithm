function isPrime(num) {
  // 1이면 걍 소수로 취급 안해줌
  if (num === 1) return false;
  console.log(num, parseInt(Math.sqrt(num)));
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    // num이 2와 본인의 숫자 사이에 숫자들 중에서 0으로 딱 떨어지는가 확인
    if (num % i === 0) return false;
  }
  return true;
}
// 예를들어서 15가 있으면 2부터 자기 자신 15까지 약수가 있으면 소수가 아닌거지
function solution2(arr) {
  let answer = [];
  for (let x of arr) {
    let res = Number(x.toString().split('').reverse().join(''));
    // 소수 확인한다.
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}
const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution2(arr));

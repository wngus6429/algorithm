function isPrime(num) {
  if (num === 1) return false;
  //   if (num === 2) return true;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
// 예를들어서 15가 있으면 2부터 자기 자신 15까지 약수가 있으면 소수가 아닌거지
function solution2(arr) {
  let answer = [];
  for (let x of arr) {
    let res = Number(x.toString().split('').reverse().join(''));
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}
const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution2(arr));

//   let answer = [];
//   for (let x of arr) {
//     let res = 0;
//     while (x) {
//       let t = x % 10;
//       res = res * 10 + t;
//       x = parseInt(x / 10);
//     }
//     // console.log(isPrime(res));
//     if (isPrime(res)) answer.push(res);
//   }
//   return answer;

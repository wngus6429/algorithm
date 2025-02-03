// 소수(Prime Number)란 1과 자기 자신으로만 나누어지는 자연수
function solution(arr) {
  let answer = [];
  function isPrime(num) {
    if (num < 2) return false; // 1이면 걍 소수로 취급 안해줌
    console.log(num, Math.sqrt(num));
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  for (let i = 0; i < arr.length; i++) {
    let reverse = arr[i].toString().split("").reverse().join("");
    if (Number(reverse) % 2 !== 0 && isPrime(Number(reverse))) {
      answer.push(Number(reverse));
    }
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

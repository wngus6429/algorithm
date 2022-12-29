let numbers = [0,1,2,3,4,5,6,7,8,9];
let answer = []
for (let n = 0; n<=3; n++){
  const index = Math.floor(Math.random() * (10 - n))
  // -n을 안하면 언디파인 나옴. numbers의 길이는 줄어드는데. 
  // Math.random은 10까지 돌리니까
  answer.push(numbers[index]) //0~9까지 정수
  numbers.splice(index, 1) //splice로 삭제
}
console.log(answer)

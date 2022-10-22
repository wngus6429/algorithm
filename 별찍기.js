var star2 = '';
var num2 = '';
for (var i = 0; i < 4; i++) {
  //i가 하나씩 증가되면 총 5번 반복한다.
  star2 += '*'; //i가 하나 증가할때마다 star 변수에 *을 더한다.
  num2 += star2 + '\n'; // *이 추가된 star 변수를 가져와서 줄바꿈을 한 후 num 변수에 담는다.
}
console.log(num2); //num을 출력한다.

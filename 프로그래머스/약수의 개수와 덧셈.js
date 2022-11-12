function solution(left, right) {
    var answer = 0;
    // left 부터 right 까지 숫자 for문 돌림
    for(let i = left; i <= right; i++){
        // 젤 작은수부터 약수 확인
        let tmp = [];
        let sum = i;
        for(let g = 1; g <= i; g++){
            // 약수 이면, 1부터 본인의 숫자까지 나눠지면 tmp로 push
            if (i % g === 0){
                tmp.push(g)
            }
        }
        // tmp의 길이가 2의 배수이면
        if(tmp.length % 2 === 0){
            answer += sum
        }
        if(tmp.length % 2 !== 0){
            answer -= sum
        }
    }
    return answer;
}
//! ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
function solution2(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        // 제곱근이 정수면 약수의 개수가 홀수다
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
console.log(solution(13, 17))
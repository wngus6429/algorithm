function solution(n, t) {
    var answer = 0;
    // 처음엔 2마리, 1시간 후엔 4마리, 2시간 후엔 8마리, ..., 10시간 후엔 2048마리가 됩니다.
    for(let i=1; i < t+1; i++){
        answer += n * i
    }
    return answer;
}
console.log(solution(2,10))
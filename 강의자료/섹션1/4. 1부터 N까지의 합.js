function solution (num) {
    let answer = 0
    for (let i = 0; i <= num; i++) {
        answer += i
    }
    return answer
}

console.log(solution(10))
//! 20240620 복습
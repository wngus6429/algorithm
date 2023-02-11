function solution2(word) {
    if(word.toUpperCase() === word.toUpperCase().split('').reverse().join('')){
        return "YES"
    } else {
        return "NO"
    }
}

const problem2 = 'goooG';
console.log(solution2(problem2));
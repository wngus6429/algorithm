function solution(s) {
    let answer = [];
    let word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let tmp = ''
    for(let i=0; i < s.length; i++){
        if(isNaN(s[i])){
          // 숫자가 아니면 넣는다.
          tmp += s[i]
          //word에 있는지 확인하고 있으면
          let wordVal = word.indexOf(tmp)
          if (wordVal > 0){
             // answer에 넣고 tmp 초기화
            answer.push(String(wordVal))
            tmp = ''
          }
        } else {
            answer.push(s[i])
        }
    }
    let answers = answer.join('')
    return Number(answers);
}
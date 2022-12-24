function solution(lines) {
    let size = lines[0].split(' ');
    let updown = Number(size[0]);
    let leftright = Number(size[1]);
    let bomb = [];
    let answer = 0;
    for (let i = 1; i < lines.length-1; i++) {
        for (let g = 0; g < lines.length-1; g++) {
            if(lines[i][g] === '#'){
                let tmp = [i, g]
               bomb.push(tmp)
            }
        }
    }
    console.log(bomb)
    let widthCheck = [];
    let heightCheck = []
    for (let i = 0; i < bomb.length; i++) {
        
        answer += updown;
        answer += leftright;
        // 어디껄 더했는지 확인
        let insert=false
        for (let g = 0; g < bomb[i].length; g++) {
            if(!insert){
              // 좌우 합산
              widthCheck.push(bomb[i][g])
              insert = true
            } else {
              // 위아래 합산
              heightCheck.push(bomb[i][g])
            }
        }
        insert=false;
    }
    console.log(widthCheck, heightCheck)
    console.log(answer)
}

console.log(solution([ '4 4', '#.#.', '....', '..#.', '....', '' ]))
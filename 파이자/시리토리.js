let lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let count = 1;
let problem = [];
let flag = false
for (let i = 1; i <= Number(lines[0]); i++) {
    if(lines[i].slice(-1) === lines[i+1].charAt(0)){
        count+= 1
    } else if(!lines[i+1]){
        continue;
    } else {
        if(!flag){
          problem.push(lines[i].slice(-1))
          problem.push(lines[i+1].charAt(0))
          flag = true;
        }
    }
}
if(count === Number(lines[0])){
    console.log('Yes')
} else {
    console.log(problem.join(' '))
}
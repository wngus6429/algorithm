function solution(nums, target) {
    let answer = []
    for(let i = 0; i < nums.length; i++){
        for(let g= i + 1; g< nums.length; g++){
            console.log(nums[i], nums[g])
            if(nums[i] + nums[g] === target){
                answer.push(i, g)
            }
        }
    }
    console.log(answer)
};
let num = [2,7,11,15]
solution(num, 9)
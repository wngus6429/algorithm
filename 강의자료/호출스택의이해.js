function oneMore(){
    console.log(("one more"));
}
function run(){
    console.log("run,run");
    setTimeout(() => {
        console.log('wow')
    }, 0);
// Promise의 then이 우선순위 더 높음
    new Promise((resolve) => {
        resolve('hi용')
    }).then(console.log)
    oneMore();
}
setTimeout(() => {
    run()
}, 5000);
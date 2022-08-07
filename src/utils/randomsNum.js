function getRandomNumObj (num){
    let arrNums = [];
    let obj = {};
    for (let i = 0; i < num; i++) {
        arrNums.push(Math.floor(1 + Math.random() * (num - 1 + 1)))
    }
    arrNums.forEach(num => {
        obj[num] = (obj[num] || 0) + 1;
    });
    return obj;
}

process.on("message", msg => {
    if(msg === 'exit'){
        process.exit()
    }
    else{
        let num = getRandomNumObj(msg)
        process.send({pid: process.pid, randoms: num})
    }
});
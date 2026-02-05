function myfunction(){
    console.log("hello");
    setTimeout(() => {
        console.log("timeout");
        let sum = 0;
        for(let i=0;i<10000;i++){
            sum += i;
        }
        console.log("ending");
        return sum;
    },0);
}

console.log("before calling myfunction")
let result = myfunction();
console.log("after calling myfunction")
console.log(result);
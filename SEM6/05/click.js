function myfun(){
    console.log("clicked");
    let sum = 0;
    for(let i=0;i<10000;i++){
        sum += i;
    }
    return sum;
}
console.log("before calling myfunction")
let sum = myfun();
console.log("after calling myfunction")
console.log(sum);

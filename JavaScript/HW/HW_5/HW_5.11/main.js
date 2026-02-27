let sum = (arr) =>{
    let x = 0;
    for (let numbers of arr){
        x = x + numbers;
    }
    return x;
}
console.log(sum([1,2,10]))
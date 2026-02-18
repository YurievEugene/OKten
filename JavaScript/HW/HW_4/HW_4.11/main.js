function sum(arr){
    let busket = 0;
    for(const numbers of arr){
        busket = busket + numbers;
    }
    return busket;
}
console.log(sum([1,2,10]))
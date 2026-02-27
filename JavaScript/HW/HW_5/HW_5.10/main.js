let minValue = (numbers) =>{
    let min = numbers[0];
    for (const number of numbers){
        if (number < min){
            min = number
        }
    }
    return min;
}
console.log(minValue([11,22,10,1,3]))
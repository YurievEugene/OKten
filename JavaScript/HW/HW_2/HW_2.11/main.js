let x = +prompt('x=');
if(x === null || x === 0 || x === NaN || x === undefined || x === ''){
    x='default';
}else {
    x = x
}
console.log(x)
//if(!x){
//    x = 'default'
//}
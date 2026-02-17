let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
console.log('True Status')
for(let trueuser of users){
    if(trueuser.status === true){
        console.log(trueuser)
    }
}
console.log('False Status')
for(let falseuser of users){
    if(falseuser.status === false){
        console.log(falseuser)
    }
}
console.log('Older then 30')
for(let olduser of users){
    if(olduser.age >= 30){
        console.log(olduser)
    }
}
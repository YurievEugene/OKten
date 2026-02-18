function foobar(users){
    for(const user of users){
        document.writeln(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
foobar([
    {id:1, name: 'julian', age:123},
    {id:3, name: 'Eugene', age:123},
    {id:2, name: 'Daniel', age:123},
    {id:4, name: 'Sam', age:123},
    {id:5, name: 'King', age:123}
]);

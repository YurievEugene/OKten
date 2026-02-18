function foobar(arrayPrimitives){
    for ( const item of arrayPrimitives){
        document.writeln(`<li>${item} </li>`);
    }
}
foobar([1239612, 183, 'asfad', true]);
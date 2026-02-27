let funcbar = (arrayPrimitives) => {
    for ( const item of arrayPrimitives){
        document.writeln(`<li>${item} </li>`);
    }
}
funcbar([11,22,true,"something",false])
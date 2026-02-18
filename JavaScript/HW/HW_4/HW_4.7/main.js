function foobar(text, counter){
    document.writeln(`<ul>`);
    for ( let i = 0 ; i < counter; i++){
        document.writeln(`<li>${text}</li>`);
    }
    document.writeln(`</ul>`);
}
foobar('text massage', 10);

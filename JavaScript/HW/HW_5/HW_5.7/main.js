let funcbar = (text, counter) =>{
    document.writeln(`<ul>`);
    for ( let i = 0 ; i < counter; i++){
        document.writeln(`<li>${text}</li>`);
    }
    document.writeln(`</ul>`);
}
funcbar('text message', 5)
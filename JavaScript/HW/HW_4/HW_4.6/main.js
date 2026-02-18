function ul(text){
    let m = `<ul>
                <li>${text}</li>
                <li>${text}</li>
                <li>${text}</li>
            </ul>`;
    document.writeln(m);
}
ul('test')
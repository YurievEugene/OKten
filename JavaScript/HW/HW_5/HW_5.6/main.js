let func = (text) =>{
    let m = ` <ul>
                <li>${text}</li>
                <li>${text}</li>
                <li>${text}</li>
            </ul>`;
    document.writeln(m);
}
func('Some text')
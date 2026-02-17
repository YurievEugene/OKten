let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.writeln('<ul>');
for(let item of listOfItems){
    document.writeln(`<li>${item}</li>`);
}
document.writeln('</ul>');
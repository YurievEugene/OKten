function writer(productTitle, price, description){
    document.writeln(
        `
        <div> 
            <h2>${productTitle} ${price}</h2>
            <p>${description}</p>
        </div>
        `
    )
}
writer('milk', 32, 'some milk description');
writer('meat', 150, 'meat description')
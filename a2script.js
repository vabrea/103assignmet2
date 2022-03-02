//assignment 2

// declaration of vars
let userName=prompt("Enter your name:");
let productOrdered=prompt("Enter the product");
let quantity=Number(prompt("Enter quantity:"));
let price=Number(prompt("Enter the price"));
let taxes=0.16
let subtotal=quantity*price

//transform the string in numbers


//display values in the html
console.log(userName, productOrdered, quantity, price);
    document.write(`
        <h2>Thank you so much for your order ${userName},</h2>
        <br>
        <br>
        Product Ordered: ${productOrdered}
        <br>
        Quantity: ${quantity}
        <br>
        Item Price: $${price}
        <br>
        Subtotal: $${subtotal}
        <br>
        Taxes (MEX): $${(subtotal*taxes).toFixed(2)}
        <br>
        Order Total: <b>$${(subtotal+(subtotal*taxes)).toFixed(2)} </b>        
    `);

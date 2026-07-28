let choice;

const cart = [
    {
        id: 1,
        name: "Rice",
        price: 60,
        quantity: 2
    },
    {
        id: 2,
        name: "Milk",
        price: 30,
        quantity: 3
    },
    {
        id: 3,
        name: "Sugar",
        price: 45,
        quantity: 1
    }
];

do{
    choice = Number(prompt(`
========== LOCALHUB CART ==========

1. View Cart
2. Add Product
3. Remove Product
4. Update Quantity
5. Calculate Total
6. Generate Bill
7. Exit

==================================`
    ))
    switch (choice){
        case 1:
            viewCart()
            break
        case 2:
            addProdcut()
            break
        case 3:
            removeProduct()
            break
        case 4:
            updateQuantity()
            break
        case 5:
            calculateTotal()
            break
        case 6:
            generateBill()
            break
        case 7:
            console.log("Thank you...")
            break
        default:
            console.log("Invalid choice")
    }
    
}while(choice!=7)

function validateInput(input){
    return input !== null && String(input).trim() !== ""
}

function viewCart(){
    if (cart.length !== 0) {
        cart.forEach(product =>{
        console.log(`
ID : ${product.id}

Product : ${product.name}

Price : ₹${product.price}

Quantity : ${product.quantity}

Subtotal : ₹${product.quantity*product.price}
            `)
        })
    }else{
        console.log("Cart is empty")
    }
}

function addProdcut(){
    let ProductName = prompt("Enter a product name")
    if (validateInput(ProductName) && (!getProduct(ProductName,'name'))){
        let price = Number(prompt("Enter price"));
        if (validateInput(price) && isGreaterThanZero(price)){
            let quantity = Number(prompt("Enter quantity"));
            if (validateInput(quantity) && isGreaterThanZero(quantity)){
                cart.push({id : cart.length + 1, name:ProductName,price : price, quantity:quantity})
            }else{
                console.log("input should not be empty or greater than zero")
            }
        }else{
            console.log("input should not be empty or greater than zero")
        }
    }else{
        console.log("input should not be empty or item already exist")
    }
}

function removeProduct(){
    let ProductId = Number(prompt("Enter Product Id"))

    if (validateInput(ProductId)){
        if (getProduct(ProductId , 'id')){
            const index = getProductByIndex(ProductId,'id')
            cart.splice(index , 1)
            console.log("Product removed successfully.")
        }else{
            console.log("Product not found.")
        }
    }else{
        console.log("Input should not be empty")
    }
}

function updateQuantity(){
    let productId = Number(prompt("Enter Product Id"))
    let newQuantity = Number(prompt("Enter the quantity of product"))
    
    if (validateInput(productId) && validateInput(newQuantity) && isGreaterThanZero(newQuantity)){
        if (getProduct(productId , 'id')){
            const index = getProductByIndex(productId,'id')
            cart[index].quantity = newQuantity 
            console.log("Product updated successfully.")
        }else{
            console.log("Product not found.")
        }
    }else{
        console.log("Input should not be empty")
    }
}

function getTotalPrice(){
    let total = 0
    cart.forEach(product => {
        total += (product.price * product.quantity)
    });
    return total
}

function calculateTotal(){
    console.log(`Total : ₹${getTotalPrice()}`)
}

function getBillBody() {
    return cart
        .map(product => `
${product.name}
${product.quantity} x ₹${product.price} = ₹${product.quantity * product.price}
`)
        .join("\n");
}

function generateBill(){
    
    console.log(`
========== BILL ==========

${getBillBody()}
--------------------------

Total Items : ₹${getTotalQuantity()}

Grand Total : ₹${getTotalPrice()}

==========================   
        `)
}

function isGreaterThanZero(input){
    return Number(input) > 0;
}

function getProduct(value, key){
    return cart.find(product => {
        if (typeof product[key] === "string") {
            return product[key].toLowerCase() === String(value).toLowerCase();
        }

        return product[key] === value;
    });
}

function getProductByIndex(value,key){
    return cart.findIndex(product => 
    {
        if (typeof product[key] === "string") {
            return product[key].toLowerCase() === String(value).toLowerCase();
        }
        return product[key] === value;
    }
    )
}

function getTotalQuantity(){
    let total = 0
    cart.forEach(product => {
        total += product.quantity
    });
    return total
}
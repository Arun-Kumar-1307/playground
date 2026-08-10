const products = [
    {
        id: 1,
        name: "Rice",
        category: "Grocery",
        price: 60,
        stock: 20
    },
    {
        id: 2,
        name: "Milk",
        category: "Dairy",
        price: 30,
        stock: 15
    },
    {
        id: 3,
        name: "Bread",
        category: "Bakery",
        price: 40,
        stock: 0
    },
    {
        id: 4,
        name: "Sugar",
        category: "Grocery",
        price: 45,
        stock: 50
    },
    {
        id: 5,
        name: "Butter",
        category: "Dairy",
        price: 120,
        stock: 8
    }
];

let choice 

do{
    choice = Number(prompt(`
========== PRODUCT SEARCH ==========

1. Search Product by Name
2. Search Product by ID
3. Check Product Availability
4. Check Inventory Health
5. Exit

====================================
        `))

    switch(choice){
        case 1:
            viewProduct()
            break
        case 2:
            getProductById()
            break
        case 3:
            checkProductAvailability()
            break
        case 4:
            checkInventoryHealth()
            break
        case 5:
            console.log("Thank You")
            break
        default:
            console.log("Invalid Choice")

    }
}while(choice !==5)

function viewProduct(){
    let productName = prompt("Enter Product Name: ")
    if(validateInput(productName)){
        let product = getProduct(productName , 'name')
        if(product){
            console.log(`
Id      : ${product.id}
name    : ${product.name}
category: ${product.category}
price   : ${product.price}
stock   : ${product.stock}
                `)
        }else{
            console.log("Product not found.")
        }
    }else{
        console.log("Input should not be empty")
    }
}

function validateInput(value){
    return value !== null && value.trim() !== ""
}

function getProduct(tempProduct, key){
    return products.find(product => {
        if(typeof product[key] !== 'string'){
            return product[key] === tempProduct
        }else{
            return product[key].toLowerCase() === String(tempProduct).toLowerCase()
        }
    })
}

function getProductById(){
    let productId = Number(prompt("Enter Product Id: "))
        let product = getProduct(productId , 'id')
        if(product){
            console.log(`
Id      : ${product.id}
name    : ${product.name}
category: ${product.category}
price   : ${product.price}
stock   : ${product.stock}
                `)
        }else{
            console.log("Product not found.")
        }
}

function checkProductAvailability(){
    let productName = prompt("Enter Product Name: ")
    if(validateInput(productName)){
        const isAvailable = products.some(product => product.name.toLowerCase() === productName.toLowerCase())
        console.log(`Available : ${isAvailable}`)
    }else{
        console.log("Input should not be empty")
    }
}

function checkInventoryHealth(){
    const health = products.every( product => product.stock > 0)
    if(health){
        console.log("Inventory Healthy")
    }else{
        console.log("Some products are out of stock.")
    }
}
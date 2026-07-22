const products = [
    "Rice",
    "Milk",
    "Bread",
    "Eggs",
    "Sugar"
];

let choice;

do {
    choice = Number(prompt(`
======= LOCALHUB INVENTORY =========

1. View Products
2. Add Product
3. Remove Product
4. Update Product
5. Search Product
6. Product Count
7. Exit

======================================`))

switch (choice){
    case 1:
        viewProduct()
        break;

    case 2:
        addProduct()
        break;

    case 3:
        removeProduct()
        break;

    case 4:
        updateProduct()
        break;

    case 5:
        searchProduct()
        break;

    case 6:
        countProduct()
        break;

    case 7:
        alert("Thank you for using LocalHub Inventory Manager.");
        break;

    default:
        alert("Invalid choice!");
}
}while( choice !== 7 )

function viewProduct(){
    if((products.length !== 0 )){
        products.forEach((product , index) => {
            console.log(`${index + 1}. ${product}`)
        })
    }else{
        console.log("Inventory is Empty")
    }
}

function validateInput(input){
    return input != null && input.trim() !== "";
}

function getProduct(tempProduct){
    return products.find(product => 
        tempProduct.toLowerCase() === product.toLowerCase()
    )
}

function getIndexOfProduct(productName){
     return products.findIndex(product=>
        productName.toLowerCase() === product.toLowerCase()
     )
}
function addProduct(){
    let productName = prompt("Enter Product Name: ")

    if(validateInput(productName)){
        if (!getProduct(productName)){
            products.push(productName)
            console.log("Product added successfully.")
        }else{
            console.log("Product already exists.")
        }
    }else{
        console.log("product name cannot be empty.")
    }
}

function removeProduct(){
    let productName = prompt("Enter Product Name: ")
    
    if(validateInput(productName)){
        if (getProduct(productName)){
            const index = getIndexOfProduct(productName)
            products.splice(index , 1)
            console.log("Product removed successfully.")
        }else{
            console.log("Product not found.")
        }
    }else{
        console.log("product name cannot be empty.")
    }
}

function updateProduct(){
    let existingProduct = prompt("Existing Product: ")

    if(validateInput(existingProduct)){
        if (getProduct(existingProduct)){
            let newProduct = prompt("New Product: ")
            if(validateInput(newProduct)){
                const index = getIndexOfProduct(existingProduct)

                products[index] = newProduct
                console.log("Product updated successfully.")
            }else{
                console.log("product name cannot be empty.")
            }
        }else{
            console.log("Product not found.")
        }
    }else{
        console.log("product name cannot be empty.")
    }
}

function searchProduct(){
    let productName = prompt("Enter Product Name: ")
    
    if(validateInput(productName)){
        if (getProduct(productName)){
            const index = getIndexOfProduct(productName)
            console.log(`Position : ${index + 1}`)
        }else{
            console.log("Product not found.")
        }
    }else{
        console.log("product name cannot be empty.")
    }
}

function countProduct(){
    console.log (products.length)
}
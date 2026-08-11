const MAX_AMOUNT =50000
const RATING = 4.5

const products = [
    {
        id: 1,
        name: "iPhone 15",
        category: "Mobile",
        price: 65000,
        stock: 12,
        rating: 4.7
    },
    {
        id: 2,
        name: "Samsung Galaxy S24",
        category: "Mobile",
        price: 72000,
        stock: 8,
        rating: 4.6
    },
    {
        id: 3,
        name: "Redmi Note 13",
        category: "Mobile",
        price: 22000,
        stock: 25,
        rating: 4.2
    },
    {
        id: 4,
        name: "HP Pavilion",
        category: "Laptop",
        price: 68000,
        stock: 5,
        rating: 4.4
    },
    {
        id: 5,
        name: "Dell Inspiron",
        category: "Laptop",
        price: 55000,
        stock: 0,
        rating: 4.1
    },
    {
        id: 6,
        name: "Sony Headphones",
        category: "Audio",
        price: 12000,
        stock: 15,
        rating: 4.5
    }
];


let choice;

do{
    choice = Number(prompt(`
========== PRODUCT ANALYTICS ==========

1. Product Names
2. Products Above ₹50,000
3. Products In Stock
4. Mobile Products
5. Premium Products
6. Product Price Summary
7. Exit

=======================================
`))

        switch(choice){
            case 1:
                displayProduct()
            break
            case 2:
                GetProductAboveMaxAmount()
            break
            case 3:
                ProductsInStock()
            break
            case 4:
                GetMobileProduct()
            break
            case 5:
                GetPremiumProduct()
            break
            case 6:
                ProductPriceSummary()
            break
            case 7:
                console.log("Thank You")
            break
            default:
                console.log("Invalid choice")
        }

}while(choice != 7)


function displayProduct(){
    const productNames = products.map(product => product.name);
    console.log(productNames);
}

function GetProductAboveMaxAmount(){
    const filteredProducts = products.filter(product => product.price > MAX_AMOUNT)
    filteredProducts.forEach(product => {
        console.log(product.name);
    });
}

function ProductsInStock(){
    const filteredProducts = products.filter(product => product.stock > 0)
    filteredProducts.forEach(product =>{
        console.log(product.name)
    })
}

function GetMobileProduct(){
    const filteredProducts = products.filter(product => product.category === "Mobile")
    filteredProducts.forEach(product =>{
        console.log(product.name)
    })
}

function GetPremiumProduct(){
    const filteredProducts = products.filter(product => product.price >= MAX_AMOUNT && product.rating >= RATING && product.stock > 0)
    filteredProducts.forEach(product =>{
        console.log(product.name)
    })
}

function ProductPriceSummary() {
    const filteredProducts = products.map(product => ({
        name: product.name,
        price: product.price
    }));

    filteredProducts.forEach(product => {
        console.log(`
name: ${product.name}
Price: ${product.price}`)
    });
}
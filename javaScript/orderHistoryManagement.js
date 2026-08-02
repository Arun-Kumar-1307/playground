const orders = [
    {
        orderId: 101,
        customer: {
            id: 1,
            name: "Arun"
        },
        products: [
            {
                name: "Rice",
                price: 60,
                quantity: 2
            },
            {
                name: "Milk",
                price: 30,
                quantity: 1
            }
        ],
        delivered: true
    },
    {
        orderId: 102,
        customer: {
            id: 2,
            name: "Rahul"
        },
        products: [
            {
                name: "Sugar",
                price: 45,
                quantity: 3
            },
            {
                name: "Bread",
                price: 40,
                quantity: 2
            }
        ],
        delivered: false
    }
];

let choice

do {
    choice = Number(prompt(`
========== ORDER DASHBOARD ==========

1. View All Orders
2. View Order By ID
3. Customer Order Summary
4. Mark Order Delivered
5. Dashboard Statistics
6. Exit

=====================================
        `))

        switch(choice){
    case 1:
        viewProduct()
        break
    case 2:
        structureOrderById()
        break
    case 3:
        console.log("this ")
        break
    case 4:
        console.log("this ")
        break
    case 5:
        console.log("this ")
        break
    case 6:
        console.log("Thank You.....")
        break
    default:
        console.log("Invalid Choice")
}
}while(choice != 6 )


function viewProduct(){
    orders.forEach(product => {
    console.log(`
Order ID : ${product.orderId}

Customer : ${product.customer.name}

Status : ${product.delivered}

Products
${getProduct(product.products)}

Order Total : ₹${getTotal(product.products)}
            `)
    });
}

function getProductById(value,orderId){
    const order = orders.find(order => order.orderId === value)
    return order
}

function structureOrderById(){
    const id = Number(prompt("Enter order ID"))
    const order = getProductById(id, 'orderId')
    if (order){
        console.log(`
Order ID : ${order.orderId}

Customer : ${order.customer.name}

Status : ${order.delivered}

Products
${getProduct(order.products)}

Order Total : ₹${getTotal(order.products)}
            `)
    }else{
        console.log("ID Not Found")
    }
}

function getProdutByIndex(index){
    return 
}

function getProduct(products){
    return products.map(product=>`
${product.name}
${product.quantity} x ₹${product.price} = ${product.price * product.quantity}
        `).join("");
}

function getTotal(products){
    let total = 0
    products.forEach(product => {
        total += (product.price * product.quantity)
    });
    return total
}

function getProductByName(){
    
}
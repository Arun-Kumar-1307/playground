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
        getProductByName()
        break
    case 4:
        isOrderDelivered()
        break
    case 5:
        createDashboard()
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

function getProductByKey(value, key) {
  const order = orders.find(order => {
    let result = order;

    for (const char of key.split(".")) {
      result = result?.[char];
    }
    if (typeof result === "string") {

        return String(result).toLowerCase() === value;
    }
    else{
        return result === value
    }
  });

  return order;
}

function structureOrderById(){
    const id = Number(prompt("Enter order ID"))
    const order = getProductByKey(id, 'orderId')
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
    let name = prompt("Enter Customer Name")
    let tempName = name.toLowerCase()
    if(validateInput(tempName)){
        const order = getProductByKey(tempName,'customer.name')
        if(order){
            console.log(`
Order ID : ${order.orderId}

Customer : ${order.customer.name}

Status : ${order.delivered}

Products
${getProduct(order.products)}

Order Total : ₹${getTotal(order.products)}
            `)
        }else{
            console.log("Customer not found.")
        }
    }else{
        console.log("Name should not be empty")
    }
}

function validateInput(input){
    return input !==null && String(input).trim() !==""
}

function findProductByInder(input){
    return orders.findIndex(order => order.orderId === input)
}

function isOrderDelivered(){
    const id = Number(prompt("Enter ID"))
    const order  = getProductByKey(id,'orderId')
        if(order.delivered){
            console.log("Order already delivered.")
        }else{
            const index = findProductByInder(id)
            orders[index].delivered = true
            console.log("Order marked as delivered.")
        }
}

function createDashboard(){
    const orderCount = orders.length
    let deliveredOrders = 0 
    let pendingOrders = 0
    orders.forEach(product =>{
        if (product.delivered){
            deliveredOrders += 1
        }else{
            pendingOrders +=1
        }
    })
    console.log(`
========== DASHBOARD ==========

Total Orders : ${orderCount}

Delivered Orders : ${deliveredOrders}

Pending Orders : ${pendingOrders}

Total Revenue : ₹${getOverallTotal()}

===============================
        `)
}

function getOverallTotal(){

    let price = 0

    orders.forEach(product =>{
        product.products.forEach(order=>{
            price += order.price * order.quantity
        })
    })
    return price
}
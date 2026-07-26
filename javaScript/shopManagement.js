let choice;

const shop = {
    id: 1,
    name: "AK Mobiles",
    owner: "Arunkumar",
    phone: "9876543210",
    email: "akmobiles@gmail.com",
    rating: 4.7,
    address: {
        city: "Chennai",
        pincode: "600001"
    },
    isOpen: true
};


do{
    choice = Number(prompt(`
========= LOCALHUB SHOP =========

1. View Shop Details
2. Update Owner
3. Update Phone
4. Update Email
5. Update Address
6. Toggle Shop Status
7. Shop Summary
8. Exit

=================================        
        `))
switch(choice){
    case 1:
        viewShopDetails()
        break
    case 2:
        updateOwner()
        break
    case 3:
        updatePhoneNumber()
        break
    case 4:
        updateEmail()
        break
    case 5:
        updateAddress()
        break
    case 6:
        toggleIsOpen()
        break
    case 7:
        shopSummary()
        break
    default:
        console.log("invalid choice")
}
}while (choice !== 8)

function validateInput(input){
    return input !== null && String(input).trim() !== "";
}

function viewShopDetails(){
    if(shop.length !== 0 ){
        console.log(`
ID          : ${shop.id}
Name        : ${shop.name}
Owner       : ${shop.owner}
Phone       : ${shop.phone}
Email       : ${shop.email}
Rating      : ${shop.rating}
City        : ${shop.address.city}
Pincode     : ${shop.address.pincode}
Status      : ${shop.isOpen ? "Open" : "Close"}
            `)
    }else{
        console.log("Shop Details are empty")
    }
    
}

function updateOwner(){
    let ownerName = prompt("Enter Owner New Name: ")
    if(validateInput(ownerName)){
        shop.owner = ownerName
        console.log("Owner Name updated")
        viewShopDetails()
    }else{
        console.log("Name cannot be empty")
    }
}

function validatePhoneNumber(number){
    return String(number.length) === 10
}

function updatePhoneNumber(){
    let phoneNumber = prompt("Enter Phone Number")

    if (validateInput(phoneNumber)){
        if (validatePhoneNumber(phoneNumber)){
            shop.phone = phoneNumber
            console.log("Phone Number updated")
            viewShopDetails()
        }else{
            console.log("Phone Number must contains 10 digits")
        }
    }else{
        console.log("Phone number cannot be empty")
    }
}

function validateEmail(email){
    return email.includes('@') && email.includes('.')
}

function updateEmail(){
    let email = prompt("Enter Email")

    if (validateInput(email)){
        if (validateEmail(email)){
            shop.email = email
            console.log("Email updated")
            viewShopDetails()
        }else{
            console.log("Email must contains @ and .")
        }
    }else{
        console.log("Email cannot be empty")
    }
}

function updateAddress(){
    let addressChoice = Number(prompt("Enter 1 to edit City and Enter 2 to edit Pincode"))

    if(validateInput(addressChoice)){
        switch(addressChoice){
            case 1:
                updateCity()
                break;
            case 2:
                updatePinCode()
                break
            default:
                console.log("invalid choice")
        }
    }else{
        console.log("Address choice cannot be empty")
    }
}

function updateCity(){
    let cityName = prompt("Enter City Name")

    if (validateInput(cityName)){
        shop.address.city = cityName
        console.log("City Name updated")
        viewShopDetails()
    }else{
        console.log("Input cannot be empty")
    }
}

function updatePinCode(){
    let pinCode = Number(prompt("Enter Pin Code Name"))

    if (validateInput(pinCode)){
        shop.address.pincode = pinCode
        console.log("Pin Code updated")
        viewShopDetails()
    }else{
        console.log("Input cannot be empty")
    }
}

function toggleIsOpen(){
    shop.isOpen = !shop.isOpen
    viewShopDetails()
}

function shopSummary(){
    if (shop.length !== 0) {
    console.log(`
Shop        : ${shop.name}

Owner       : ${shop.owner}

Location    : ${shop.address.city}

Status      : ${shop.isOpen ? "Open" : "Close"}

Rating      : ${shop.rating} ⭐

            `)
    }else{
        console.log("Shop Details are empty")
    }
}
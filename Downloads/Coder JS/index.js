// Variable and constant declarations
const companyName = "Alen Design";
let customerNames = ["Company 1", "Company 2", "Company 3"];
let products = ["Producto 1", "Producto 2", "Producto 3"];

// Function declarations
function addCustomer() {
    let newCustomer = prompt("Enter the name of the new customer:");
    if (newCustomer) {
        customerNames.push(newCustomer);
        alert(`Customer "${newCustomer}" added successfully.`);
        console.log("Customer Names:", customerNames);
    } else {
        alert("No customer added.");
    }
}

function listCustomers() {
    console.log("Listing all customers:");
    customerNames.forEach((customer, index) => {
        console.log(`${index + 1}. ${customer}`);
    });
}

function findProduct() {
    let productName = prompt("Enter the name of the product to find:");
    if (products.includes(productName)) {
        alert(`Product "${productName}" is available.`);
    } else {
        alert(`Product "${productName}" is not available.`);
    }
}

function checkProductAvailability() {
    products.forEach(product => {
        if (product.startsWith("P")) {
            console.log(`Product starting with 'P' found: ${product}`);
        }
    });
}

function greetUser() {
    let userName = prompt("Enter your name:");
    if (userName) {
        alert(`Hello, ${userName}! Welcome to ${companyName}.`);
        console.log(`User greeted: ${userName}`);
    } else {
        alert("You didn't enter a name.");
    }
}

// Function calls
addCustomer();
listCustomers();
findProduct();
checkProductAvailability();
greetUser();

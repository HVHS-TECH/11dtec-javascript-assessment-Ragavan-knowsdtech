console.log("Script Loaded");

let glassCount = 0;
let standardCount = 0;
let chocolateCount = 0;

const GLASS_PRICE = 3.99;
const STANDARD_PRICE = 5.99;
const CHOCOLATE_PRICE = 6.99;

function addItem() {

    let milkType = document.getElementById("milkType").value;
    let quantity = Number(document.getElementById("quantity").value);

    if (milkType === "glass") {
        glassCount += quantity;
    }
    else if (milkType === "standard") {
        standardCount += quantity;
    }
    else {
        chocolateCount += quantity;
    }

    document.getElementById("orderList").innerHTML =
        "Glass Bottle Milk: " + glassCount + "<br>" +
        "Standard Milk: " + standardCount + "<br>" +
        "Chocolate Milk: " + chocolateCount;
}

function checkout() {

    let customerName = document.getElementById("customerName").value;
    let money = Number(document.getElementById("money").value);

    if (customerName.trim() === "") {
    document.getElementById("output").innerHTML =
        "Please enter your name.";
    return;
}

if (document.getElementById("money").value === "") {
    document.getElementById("output").innerHTML =
        "Please enter the amount of money you have.";
    return;
}
    let total =
        (glassCount * GLASS_PRICE) +
        (standardCount * STANDARD_PRICE) +
        (chocolateCount * CHOCOLATE_PRICE);

    if (money >= total) {

        let change = money - total;

        document.getElementById("output").innerHTML =
            "Order Successful!<br><br>" +
            "Customer Name: " + customerName + "<br><br>" +
            "Glass Bottle Milk: " + glassCount + "<br>" +
            "Standard Milk: " + standardCount + "<br>" +
            "Chocolate Milk: " + chocolateCount + "<br><br>" +
            "Total Cost: $" + total.toFixed(2) + "<br>" +
            "Money Given: $" + money.toFixed(2) + "<br>" +
            "Change: $" + change.toFixed(2);

    } else {

        let needed = total - money;

        document.getElementById("output").innerHTML =
            "Not enough money!<br>" +
            "Customer Name: " + customerName + "<br><br>" +
            "You need $" + needed.toFixed(2) + " more.";

    }
}

function clearForm() {

    document.getElementById("customerName").value = "";
    document.getElementById("milkType").selectedIndex = 0;
    document.getElementById("quantity").value = 1;
    document.getElementById("money").value = "";

    glassCount = 0;
    standardCount = 0;
    chocolateCount = 0;

    document.getElementById("orderList").innerHTML =
        "Glass Bottle Milk: 0<br>" +
        "Standard Milk: 0<br>" +
        "Chocolate Milk: 0";

    document.getElementById("output").innerHTML = "";
}
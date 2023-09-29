// Sasha Cheek Sept 29 2023

// Calculates the total cost of the order and displays it
function calcTotal(valid) {
        // Gets values for relevant order form fields
    var quantity = document.getElementById("quantity").value;
    var unit_price = document.getElementById("unit_price").value;
    var discount_rate = document.getElementById("discount_rate").value;
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;

    // Displays order total only if all fields contain a valid value
    if (valid) {
        var discounted_amount = unit_price * quantity * discount_rate * 0.01;
        var order_total = quantity * unit_price - discounted_amount;
    
        document.getElementById("output").innerHTML = "Thank you for ordering, " + first_name + " " + last_name + ". Your order total is $" + order_total.toFixed(2) +".";
    }
    else {
        document.getElementById("output").innerHTML = "Please fill out all fields and try again."
    }

}

function validation() {
    // Gets values for all order form fields
    var product = document.getElementById("product").value;
    var quantity = document.getElementById("quantity").value;
    var unit_price = document.getElementById("unit_price").value;
    var discount_rate = document.getElementById("discount_rate").value;
    var order_date = document.getElementById("order_date").value;
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var payment_type = document.getElementById("payment_type").value;
    var card_number = document.getElementById("card_number").value;
    var security_code = document.getElementById("security_code").value;


    // Determines if all fields have a valid value. Displays error message for each incorrect field if not
    var valid = true;

    if (product == "") { // Product value validation
        document.getElementById("err1").innerHTML = "Product Cannot Be Empty."
        valid = false;
    }
    else {
        document.getElementById("err1").innerHTML = ""
    }

    if (isNaN(quantity) || quantity < 1) // Quantity value validation
    {
        document.getElementById("err2").innerHTML = "Quantity Must Be Numeric and Greater than 0.";
        valid = false;
    }
    else {
        document.getElementById("err2").innerHTML = ""
    }

    if (isNaN(unit_price) || unit_price < 1) // Unit Price value validation
    {
        document.getElementById("err3").innerHTML = "Unit Price Must Be Numeric and Greater than 0.";
        valid = false;
    }
    else {
        document.getElementById("err3").innerHTML = ""
    }

    if (isNaN(discount_rate) || discount_rate < 1) // Discount Rate value validation
    {
        document.getElementById("err4").innerHTML = "Discount Rate Must Be Numeric and Greater than 0.";
        valid = false;
    }
    else {
        document.getElementById("err4").innerHTML = ""
    }

    if (order_date.toLocaleString() == "" || order_date.toLocaleString().length > 10 || order_date.toLocaleString().length < 8) // Order Date value validation
    {
        document.getElementById("err5").innerHTML = "Order Date Cannot Be Empty and Must Be Between 8 and 10 Characters Long.";
        valid = false;
        alert(order_date.value);
    }
    else {
        document.getElementById("err5").innerHTML = ""
    }

    if (first_name == "" || first_name.length < 2) // First Name value validation
    {
        document.getElementById("err6").innerHTML = "First Name Cannot Be Empty Must Be Longer Than 1 Character";
        valid = false;
    }
    else {
        document.getElementById("err6").innerHTML = ""
    }

    if (last_name == "" || last_name.length < 2) // Last Name value validation
    {
        document.getElementById("err7").innerHTML = "Last Name Cannot Be Empty Must Be Longer Than 1 Character";
        valid = false;
    }
    else {
        document.getElementById("err7").innerHTML = ""
    }

    if (payment_type == "") // Payment Type value validation
    {
        document.getElementById("err8").innerHTML = "Payment Type Cannot Be Empty";
        valid = false;
    }
    else {
        document.getElementById("err8").innerHTML = ""
    }

    if (isNaN(card_number) || card_number.length != 16 || card_number % 1 != 0 || card_number.includes('.')) // Card Number value validation
    {
        document.getElementById("err9").innerHTML = "Card Number Must Be a 16 digit Integer Number";
        valid = false;
    }
    else {
        document.getElementById("err9").innerHTML = ""
    }

    if (isNaN(security_code) || security_code.length != 3) // Security Code value validation
    {
        document.getElementById("err10").innerHTML = "Security Code Must Be a 3 digit Number";
        valid = false;
    }
    else {
        document.getElementById("err10").innerHTML = ""
    }

    return valid;
}

function limitText() {
    var comments = U.$('comments');
    var count = comments.value.length; 
    if (count > 100) {
    comments.value = comments.value.slice(0, 100);
    }
    count = comments.value.length;   
    U.$('character_count').innerHTML = count + "/100"; 
}

function init()
{
    var order_button = document.getElementById("order_button");
    if (order_button) {
    order_button.onclick = function() {calcTotal(validation())};
    }

    var login_button = document.getElementById("login-button");
    if (login_button) {
        login_button.onclick = function() {login()};
    }

    var order_date = document.getElementById("order_date");
    if (order_date) {
        var originalDate = new Date();
        var currentDay = ("0" + originalDate.getDate()).slice(-2);
        var currentMonth = ("0" + (originalDate.getMonth() + 1)).slice(-2);
        var currentYear = originalDate.getFullYear();
        var currentDate = currentYear + "-" + (currentMonth) + "-" + (currentDay);

        order_date.value = currentDate;
    }

    var comments = U.$("comments");
    if (comments) {
        U.addEvent(comments, "input", limitText);
    }
}

window.onload = init;
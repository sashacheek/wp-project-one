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

    var dateREGEX = "/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/"


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

    if (dateREGEX.test(order_date.toLocaleString())) // Order Date value validation
    {
        document.getElementById("err5").innerHTML = "Order Date Cannot Be Empty and Must Be Between 8 and 10 Characters Long.";
        valid = false;
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

function validateLogin(username, password) {
    if (!password) {
        passwordError = document.getElementById("password_error");
        passwordError.innerHTML = "Password Cannot Be Empty.";
        document.getElementById("login-output").innerHTML = "";
        document.getElementById("password").focus();
        
    }

    if (!username) {
        usernameError = document.getElementById("username_error");
        usernameError.innerHTML = "Username Cannot Be Empty.";
        document.getElementById("login-output").innerHTML = "";
        document.getElementById("username").focus();
    }

    if (username && password) {
        // document.getElementById("username").value = "";
        // document.getElementById("password").value = "";
        document.getElementById("login-output").innerHTML = errorMessage;
    }
}

function checkTerms() {
    termsAndConditions = U.$("terms-and-conditions");
    if (termsAndConditions.checked) {
        U.$("order_button").disabled = false;
    }
    else {
        U.$("order_button").disabled = true;
    }
}
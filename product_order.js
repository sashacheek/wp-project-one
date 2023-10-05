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

function limitText() {
    var comments = U.$('comments');
    var count = comments.value.length; 
    if (count > 100) {
    comments.value = comments.value.slice(0, 100);
    }
    count = comments.value.length;   
    U.$('character_count').innerHTML = count + "/100"; 
}

function reset() {
        var product = document.getElementById("product");
        product.value = "";
        var quantity = document.getElementById("quantity");
        quantity.value = "";
        var unit_price = document.getElementById("unit_price");
        unit_price.value = "";
        var discount_rate = document.getElementById("discount_rate");
        discount_rate.value = "";
        var order_date = document.getElementById("order_date");
        order_date.value = "";
        var first_name = document.getElementById("first_name");
        first_name.value = "";
        var last_name = document.getElementById("last_name");
        last_name.value = "";
        var payment_type = document.getElementById("payment_type");
        payment_type.value = "";
        var card_number = document.getElementById("card_number");
        card_number.value = "";
        var security_code = document.getElementById("security_code");
        security_code.value = "";
        var comments = document.getElementById("comments");
        comments.value = "";
}

function init()
{
    var order_button = document.getElementById("order_button");

    order_button.disabled = true;
    var termsAndConditions = U.$("terms-and-conditions");
    U.addEvent(termsAndConditions, 'click', checkTerms)

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

    var currentDatetime = U.$("current_datetime");
    if (currentDatetime) {
        initialDate = new Date();
        currentDatetime.innerHTML = initialDate;
        U.addEvent(U.$('current_datetime'), 'mouseover', function() {
            nowDate = new Date();
            currentDatetime.innerHTML = nowDate;
       });
    
    }

    var resetButton = U.$("reset_button");
    if (resetButton) {
        U.addEvent(U.$('reset_button'), 'click', function(){
            var result = confirm("Are you sure?");
            if (result){
                reset();
            }
        });        
    }
}

window.onload = init;
function login() {
    var usernames = ["Username1","Username2","Username3","Username4"];
    var passwords = ["Password1","Password2","Password3","Password4"];
    errorMessage = "Invalid username or password! Please try again.";

    var givenUsername = document.getElementById("username").value;
    var givenPassword = document.getElementById("password").value;

    for (i = 0; i < usernames.length; i++) {
        if (usernames[i] == givenUsername && passwords[i] == givenPassword) {
            var loginOutput = document.getElementById("login-output").innerHTML = "";
            window.location="product_order.html"; 
            break;
        }
        else {
            var loginOutput = document.getElementById("login-output").innerHTML = errorMessage;
        }
    }
}

// function init() {
//     var login_button = document.getElementById("login-button");
//     login_button.onclick = function() {login()};
// }

// window.onload = init;
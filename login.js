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
    }

    document.getElementById("username_error").innerHTML = "";
    document.getElementById("password_error").innerHTML = "";
    validateLogin(givenUsername, givenPassword);
}
var objP = [
    {
        emailInput: "admin@gmail.com",
        passwordInput: "admin"
    },
    {
        emailInput: "user@gmail.com",
        passwordInput: "user"
    }
];
function getInfo(event) {
    event.preventDefault(); 
    var emailInput = document.getElementById("emailInput").value;
    var passwordInput = document.getElementById("passwordInput").value;
    var isLoggedIn = false;

    for (var i = 0; i < objP.length; i++) {
        if (emailInput == objP[i].emailInput && passwordInput == objP[i].passwordInput) {
            console.log("Login successful");
            window.location.href = '/sp';
            isLoggedIn = true;
            break;
        }
    }

    if (!isLoggedIn) {
        console.log("Login failed");
        alert("Invalid credentials");
    }

    return isLoggedIn;
}
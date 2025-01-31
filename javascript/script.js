function login() {
    const validUser = "2210030432";
    const validPass = "12345";
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username === validUser && password === validPass) {
        message.style.color = "green";
        message.textContent = "goodmorning";
    } else if (username !== validUser && password !== validPass) {
        message.style.color = "red";
        message.textContent = "Error: Invalid username and password";
    } else {
        message.style.color = "red";
        message.textContent = "Error: Invalid credentials";
    }
}

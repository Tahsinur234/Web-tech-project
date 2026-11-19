
const form = document.getElementById("adminForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    clearErrors();

    let valid = true;

    const name = document.getElementById("adminName").value.trim();
    const email = document.getElementById("adminEmail").value.trim();
    const password = document.getElementById("adminPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("adminPhone").value.trim();
    const adminId = document.getElementById("adminId").value.trim();
    const securityCode = document.getElementById("securityCode").value;

    if (name === "") {
        showError("adminNameError", "Please enter your name.");
        valid = false;
    }
    else if (!/^[a-zA-Z ]+$/.test(name)) {
        showError("adminNameError", "Name should contain only letters.");
        valid = false;
    }

    if (email === "") {
        showError("adminEmailError", "Please enter your email.");
        valid = false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError("adminEmailError", "Enter a valid email address.");
        valid = false;
    }

    if (password.length < 8) {
        showError("adminPasswordError", "Password must contain at least 8 characters.");
        valid = false;
    }

    if (confirmPassword === "") {
        showError("confirmPasswordError", "Please confirm your password.");
        valid = false;
    }
    else if (password !== confirmPassword) {
        showError("confirmPasswordError", "Passwords do not match.");
        valid = false;
    }

    if (!/^01[3-9]\d{8}$/.test(phone)) {
        showError("adminPhoneError", "Enter a valid Bangladesh phone number.");
        valid = false;
    }

    if (adminId === "") {
        showError("adminIdError", "Please enter your Admin ID.");
        valid = false;
    }

    if (securityCode === "") {
        showError("securityCodeError", "Please enter the security code.");
        valid = false;
    }

    if (valid) {
        alert("Admin registration form validated successfully!");

        window.location.href = "login.html";
    }

});

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors() {
    const errors = document.querySelectorAll(".error");

    errors.forEach(function(error) {
        error.textContent = "";
    });
}

form.addEventListener("reset", function() {
    clearErrors();
});

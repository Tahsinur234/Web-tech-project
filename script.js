
const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    clearErrors();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let nid = document.getElementById("NID");
    let phone = document.getElementById("Phone");
    let dob = document.getElementById("dob");
    let address = document.getElementById("address");
    let postal = document.getElementById("postal");

    let gender = document.querySelector(
        'input[name="Gender"]:checked'
    );

    let nationality = document.querySelector(
        'input[name="Nationality"]:checked'
    );

    let valid = true;

    if (name.value.trim() === "") {
        showError(name, "nameError", "Name is required.");
        valid = false;
    } else if (!/^[A-Za-z ]+$/.test(name.value.trim())) {
        showError(name, "nameError", "Only letters are allowed.");
        valid = false;
    } else {
        showSuccess(name);
    }

    if (email.value.trim() === "") {
        showError(email, "emailError", "Email is required.");
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        showError(email, "emailError", "Invalid email address.");
        valid = false;
    } else {
        showSuccess(email);
    }

    if (password.value === "") {
        showError(password, "passwordError", "Password is required.");
        valid = false;
    } else if (password.value.length < 8) {
        showError(password, "passwordError",
            "Password must contain at least 8 characters.");
        valid = false;
    } else {
        showSuccess(password);
    }

    if (nid.value.trim() === "") {
        showError(nid, "nidError", "NID is required.");
        valid = false;
    } else if (!/^(?:\d{10}|\d{13}|\d{17})$/.test(nid.value.trim())) {
        showError(nid, "nidError",
            "NID must contain 10, 13 or 17 digits.");
        valid = false;
    } else {
        showSuccess(nid);
    }

    if (phone.value.trim() === "") {
        showError(phone, "phoneError", "Phone number is required.");
        valid = false;
    } else if (!/^01\d{9}$/.test(phone.value.trim())) {
        showError(phone, "phoneError",
            "Enter a valid 11-digit phone number starting with 01.");
        valid = false;
    } else {
        showSuccess(phone);
    }

    if (dob.value === "") {
        showError(dob, "dobError", "Date of birth is required.");
        valid = false;
    } else if (new Date(dob.value) > new Date()) {
        showError(dob, "dobError",
            "Date of birth cannot be in the future.");
        valid = false;
    } else {
        showSuccess(dob);
    }

    if (gender === null) {
        document.getElementById("genderError").innerHTML =
            "Please select your gender.";
        valid = false;
    }

    if (nationality === null) {
        document.getElementById("nationalityError").innerHTML =
            "Please select your nationality.";
        valid = false;
    }

    if (address.value.trim() === "") {
        showError(address, "addressError",
            "Present address is required.");
        valid = false;
    } else if (address.value.trim().length < 10) {
        showError(address, "addressError",
            "Address must be at least 10 characters.");
        valid = false;
    } else {
        showSuccess(address);
    }

    if (postal.value.trim() === "") {
        showError(postal, "postalError",
            "Postal code is required.");
        valid = false;
    } else if (!/^\d{4}$/.test(postal.value.trim())) {
        showError(postal, "postalError",
            "Postal code must contain exactly 4 digits.");
        valid = false;
    } else {
        showSuccess(postal);
    }

    if (valid) {
        alert("Registration Successful!");
        form.reset();
        clearErrors();
        window.location.href = "login.html";
    }

});

function showError(input, errorId, message) {

    input.classList.add("errorBorder");
    input.classList.remove("successBorder");

    document.getElementById(errorId).innerHTML = message;
}

function showSuccess(input) {

    input.classList.remove("errorBorder");
    input.classList.add("successBorder");
}

function clearErrors() {

    let errors = document.querySelectorAll(".error");

    errors.forEach(function (item) {
        item.innerHTML = "";
    });

    let fields = document.querySelectorAll("input, textarea");

    fields.forEach(function (field) {
        field.classList.remove("errorBorder");
        field.classList.remove("successBorder");
    });

}

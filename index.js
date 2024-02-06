
const loginFormElement = document.forms.login;
const loginid = document.getElementById("loginid");
const registrationFormElement = document.forms.registrationForm;
const messageContainer = document.querySelector(".message-container");
const messageText = document.querySelector(".message-text");
const messageCancelButton = document.querySelector(".cancel-btn");

const passwordRegEx = new RegExp("^[a-zA-Z0-9@_]{8,}$");
const usernameRegEx = new RegExp("^[a-zA-Z][a-zA-Z0-9]{5,}$");
const passwordRgx = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@_])[a-zA-Z0-9@_]{8,}$");
const emailRegEx = new RegExp("^[a-z0-9]{3,}@gvpce[.]ac[.]in$");
const mobileRegEx = new RegExp("^[6-9][0-9]{9}$");

function showMessage(message) {
    messageContainer.style.visibility = "visible";
    messageText.innerText = message;
    window.scrollTo(0, 0);
}

function hideMessage() {
    messageContainer.style.visibility = "hidden";
}

messageCancelButton.addEventListener("click", () => {
    hideMessage();
});



function validateLogin()
{
    const username = loginFormElement.elements.username.value;
    const password = loginFormElement.elements.password.value;

    if(username === "" || username.length < 6) {
        showMessage("Invalid username!! Username must be at least 6 characters.");
        return false;
    } else if(password.length < 8) {
        showMessage("Invalid password!! Password must be at least 8 characters.");
        return false;
    } else if(!passwordRegEx.test(password)) {
        showMessage("Invalid password!! Password must contain only 0-9, a-z, A-Z, @ and _");
        return false;
    } else {
        showMessage("Submitted successfully.");
        loginFormElement.reset(); // Reset form fields after successful submission
        return true;
    }
};

registrationFormElement.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = registrationFormElement.elements.username.value;
    const password = registrationFormElement.elements.password.value;
    const cpassword = registrationFormElement.elements.cpassword.value;
    const email = registrationFormElement.elements.email.value;
    const mobile = registrationFormElement.elements.mobile.value;
    const dob = registrationFormElement.elements.dob.value;

    if(!usernameRegEx.test(username)) {
        showMessage("Invalid username!! Username must be at least 6 characters and should begin with digits.");
    } else if(!passwordRgx.test(password)) {
        showMessage("Invalid password!! Password must contain at least one 0-9, at least one a-z, at least one A-Z, at least one @ and _, and at least of size 8.");
    } else if(cpassword !== password) {
        showMessage("Confirm password and password must be the same.");
    } else if(!emailRegEx.test(email)) {
        showMessage("Invalid Email!!");
    } else if(!mobileRegEx.test(mobile)) {
        showMessage("Invalid mobile number!!");
    } else {
        showMessage("Registered Successfully.");
        registrationFormElement.reset(); // Reset form fields after successful registration
    }
});

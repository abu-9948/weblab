
const loginFormElement = document.forms.login;
const loginid = document.getElementById("loginid");
const registrationFormElement = document.forms.registration;
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
    const username = loginFormElement.uname.value;
    const password = loginFormElement.psw.value;

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


    

function validateForm2()
{

  
  const username = registrationFormElement.username.value;
    const password = registrationFormElement.password.value;
    const cpassword = registrationFormElement.cpassword.value;
    const email = registrationFormElement.email.value;
    const mobile = registrationFormElement.mobile.value;
    const dob = registrationFormElement.dob.value;

  if(!usernameRegEx.test(username)) {
    showMessage("Invalid username!! Name must be at least 6 characters and should begin with capitals.");
    return false;
} else if(!passwordRgx.test(password)) {
    showMessage("Invalid password!! Password must contain at least one 0-9, at least one a-z, at least one A-Z, at least one @ and _, and at least of size 8.");
    return false;
} else if(cpassword !== password) {
    showMessage("Confirm password and password must be the same.");
    return false;
} else if(!emailRegEx.test(email)) {
    showMessage("Invalid Email!!");
    return false;
} else if(!mobileRegEx.test(mobile)) {
    showMessage("Invalid mobile number!!");
    return false;
} else {
    showMessage("Registered Successfully.");
    registrationFormElement.reset(); 
}
return true;
}
    
    


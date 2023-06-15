let passwordField = document.getElementById("password");
let confirmPasswordField = document.getElementById("confirm-password");
let confirmButton = document.getElementById("submit-button");

function checkPassword(field){
    if (passwordField.value != confirmPasswordField.value){
        confirmButton.style.backgroundColor = "red";
        field.setCustomValidity("Passwords must match");
        passwordField.style.border = "1px solid red";
        confirmPasswordField.style.border = "1px solid red";
        field.reportValidity();
    }
    else if (passwordField.value == confirmPasswordField.value){
        confirmButton.style.backgroundColor = "#596D48";
        field.setCustomValidity("");
        passwordField.style.border = "1px solid #E5E7EB";
        confirmPasswordField.style.border = "1px solid #E5E7EB";
        field.reportValidity();
    }
};


passwordField.addEventListener('keyup', (e)=>{
    checkPassword(passwordField);
});

confirmPasswordField.addEventListener('keyup', (e)=>{
    checkPassword(confirmPasswordField);
});
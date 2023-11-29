function getFormInput() {
    // Get form elements by ID
    var usernameInput = document.getElementById('name');
    var numberInput = document.getElementById('number');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var confirmPassword = document.getElementById('retypPassword')

    // Get values from form elements
    var usernameValue = usernameInput.value;
    var numberValue = numberInput.value;
    var emailValue = emailInput.value;
    var passwordValue = passwordInput.value;
    var confirmPasswordValue = confirmPassword.value

    // Display values (you can perform further actions here)
    alert('Username: ' + usernameValue + '\nPhone Number: ' + numberValue + '\nEmail: ' + emailValue + '\nPassword: ' + passwordValue);
}
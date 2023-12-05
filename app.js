function registration() {
    // Get form elements by ID
    var usernameInput = document.getElementById('name').value;
    var numberInput = document.querySelector('#number').value;
    var emailInput = document.getElementById('email').value;
    var passwordInput = document.querySelector('#password').value;
    var confirmPassword = document.getElementById('retypPassword').value;

    console.log(usernameInput, numberInput, emailInput, passwordInput, confirmPassword);


    if (usernameInput === ""){
        alert("Please enter your name");
    }
    else if (numberInput === ""){
        alert("Please enter your phone number");
    }
    else if (emailInput === ""){
        alert("Please enter your Email");
    }
    else if (passwordInput !== confirmPassword){
        alert("Your password not match");
    }
    else{
        alert("Your registration successfully ");
    }

    // switch (registration) {
    //     case usernameInput === "":
    //         alert("Please enter your name");
    //         break;
    //     case numberInput === "":
    //         alert("Please enter your phone number");
    //         break;
    //         case emailInput === "":
    //             alert("Please enter your Email");
    //             break; 
                
    //             case passwordInput !== confirmPassword:
    //                 alert("Your password not match");
    //                 break;
    //     default:
    //         alert("Your registration successfully ");
    //         break;
    // }

    // Get values from form elements
    // var usernameValue = usernameInput.value;
    // var numberValue = numberInput.value;
    // var emailValue = emailInput.value;
    // var passwordValue = passwordInput.value;
    // var confirmPasswordValue = confirmPassword.value

    // // Display values (you can perform further actions here)
    // alert('Username: ' + usernameValue + '\nPhone Number: ' + numberValue + '\nEmail: ' + emailValue + '\nPassword: ' + passwordValue);
}
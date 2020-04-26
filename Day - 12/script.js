const name = document.getElementById("username1");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const cpassword = document.getElementById("password2");
const form = document.getElementById("form");

//functions to manipulate..
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const smalltext = formControl.querySelector('small');
    smalltext.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";  
}


form.addEventListener('submit', function(e){
    e.preventDefault();

    if(username1.value === ''){
        showError(name, "Username is required");
    }else{
        showSuccess(name);
    }
    if(email.value === ''){
        showError(email, "Email is required");
    }else{
        showSuccess(email);
    }
    if(pass.value === ''){
        showError(pass, "Password is required");
    }else{
        showSuccess(pass);
    }
    if(cpassword.value === ''){
        showError(password2, "Confirm Password is required");
    }else{
        showSuccess(cpassword);
    }
})
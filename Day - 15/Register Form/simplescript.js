const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirmpassword");
const form = document.getElementById("form");

function checkRequired(inputArr){
    inputArr.forEach(function(input) {
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    })
}
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const smalltext = formControl.querySelector('small');
    smalltext.innerText = message;
}
function checkLength(input ,min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`);
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must less than ${max} characters`);
    }
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";  
}


form.addEventListener('submit', function(e){
    e.preventDefault();

   checkRequired([username, email, password, password2]);
   checkLength(username, 3, 15);
   checkLength(password, 6, 25);
});


   
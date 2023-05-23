function Evaluate() {
    const name = document.getElementById("name").value;
    const nameError = document.getElementById("nameError");

    if (name.trim() == "") {
        nameError.innerHTML = "User cannot be a blank";
        return false;
    } else if (name.length < 5) {
        nameError.innerHTML = "user must not be less than 5 characters";
        return false;
    } else {
        nameError.innerHTML = "";
        return true;
    }
}

function EvaluateEmail() {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");

    if (email.trim() == "") {
        emailError.innerHTML = "Email cannot be blank";
        return false;
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
        emailError.innerHTML = "Please write a valid email";
        return false;
    } else {
        emailError.innerHTML = "";
        return true;
    }
}

function EvaluatePassword() {
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");

    if (password.trim() == "") {
        passwordError.innerHTML = "Please enter a valid password";
        return false;
    } else if (password.length < 6 || password.length > 20) {
        passwordError.innerHTML = "Password length not be less than 6 char or not more than 20 char";
        return false;
    } else {
        passwordError.innerHTML = "";
        return true;
    }
}

function EvaluateRepeat(){
    const password = document.getElementById("password").value;
    const passwordRepeat = document.getElementById("repeat").value;
    const repeatError = document.getElementById("repeatError")

    if(passwordRepeat != password){
      repeatError.innerHTML="password mismatch";
      return false
    }else{
       repeatError.innerHTML=""
       return true;
    }

}

function validateForm(){
    if(!Evaluate() || !EvaluateEmail() ||!EvaluatePassword() || !EvaluateRepeat())
      {
        return false
      }
    else{
        return true
    }
    } 


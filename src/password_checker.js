var password = "Um#xh8dgr"
function passwordIsValid() {
try {
    if (password == "") {
        throw("password should exist");
    }

    if (password.length < 8) {
        throw("password should be longer than than 8 characters");
    }

    if (password == (/[a-z]/g)) {
        throw("password should have at least one lowercase letter")
    }

    if (password == (/[A-Z]/g)) {
        throw("password should have at least one uppercase letter")
    }

    if (password == (/[0-9]/g)) {
        throw("password should at least have one digit")
    }

    if (password == (/[{!@#$%^&*.\*}]/g)) {
        throw("password should have at least one special character")
    }
} catch (error) {
  console.log(error)  
}
return "password is valid";
}  
console.log(passwordIsValid("password"));

// This funtion should return true and it should at least meet three conditions

function passwordIsOk(password) {
    const conditions = [/'0-9'/, /'A-Z'/, /'a-z'/, /'!@#$%*().'/];

    if (password == "" || password.length < 9) {
      return false;
    }
    for (let i = 0; i <= conditions.length; i++) {
      if (password != (conditions[i])) {
        return true;
      } 
      }return false;
    }
console.log(passwordIsOk("sdHH12*#"))

module.exports ={passwordIsOk,passwordIsValid}
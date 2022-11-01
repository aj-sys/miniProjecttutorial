

// WHILE LOOP
// while (number < 10){
//     alert('Number is less than 10')
// }


// For Loop

// for (let i=0; i<3; i++){
//     alert('I love you');
// }

// CONDITIONAL STATEMENTS

// if (gender = 'Female'){
//     alert('You are a lady')
// }
// else if (gender = 'Male') {
//     alert('You are a male')

// }

// else {

//     alert('I dont know what you are')
// }

// FUNCTIONS
// function showMessage(){
//     console.log ('Hi there');
// }
// showMessage();

// OBJECTS are used to store keyed collection of data and complex entities.

// let user = {}
// let user['name'] = 'iamaj'

// CONSOLE: Use to see our codes and debug errors.You use console.log to call a code to the console







// PROJECT 6: 

// Objects to store  details 

 let userDetailsDatabase = { }


 // PROJECT 5: If you dont input anything in the prompt, it should keep asking the user to input something
 
 //  USERNAME
 function getUserDetails() {
        let username = prompt ('Enter your username')

        // USER SHOULD BE ABLE TO CANCEL WITHOUT BEING PROMPTED TO INPUT SOMETHING
        if (username === null){
            return
        }

// Validating usename
function validateUsername(username){
    if (username.length <10 && username.length >0){
        return true
    
    }else {
        return false
    }
}

// console.log(validateUsername(username))
while (validateUsername(username)=== false){
    username = prompt('Username must be less than 10 and greater than 0')
}

userDetailsDatabase['username'] = username


// EMAIL ADDRESS

let email = prompt ('Enter your email address')
if (email === null){
    return
}

function validateEmail(email){
    const emailCheck = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    emailCheckResult = emailCheck.test(email);
    if (emailCheckResult === true){
        return true
    }else{
        return false
    }
        
    }

    // console.log(validateEmail(email))

while (validateEmail(email)=== false){
    email = prompt('Enter a valid email')

}

userDetailsDatabase['email'] = email



// PHONE NUMBER

    let phoneNumber = prompt('Enter your phone number')
    if (phoneNumber === null){
        return
    }

    function validatePhoneNumber( phoneNumber){
        if (phoneNumber.length === 11){
            return true
        }else{
            return false
        }
    }

    // console.log(validatePhoneNumber(phoneNumber))
while (validatePhoneNumber(phoneNumber)=== false){
    phoneNumber = prompt('Phone number must be 11-digits, try again!')
}

userDetailsDatabase['phoneNumber'] = phoneNumber



// PASSWORD
    let passWord = prompt('Enter your password')
    if (passWord === null){
        return
    }

    function validatePassword(password){
        if (password.length < 6){
            return false
        }else{
            return true
        }
    }
    // console.log(validatePassword(passWord))

while (validatePassword(passWord)=== false){
    passWord = prompt('Password must not be less than 6 digits')
}

userDetailsDatabase['passWord'] = passWord




// CONFIRM PASSWORD

    let confirmPassword = prompt('Confirm your password')
    if (confirmPassword === null){
        return
    }

    function validateconfirmPassword(confirmPassword){
        if (confirmPassword != passWord) {
            return false
        }else{
            return true
        }
    }
    // console.log(validateconfirmPassword(confirmPassword))
while (validateconfirmPassword(confirmPassword)=== false){
    confirmPassword = prompt('Confirmed password does not match password, try again!')
}

userDetailsDatabase['confirmPassword'] = confirmPassword

    }


// TO DISPLAY DETAILS IN A GLOBAL OBJECT
function  displayUserDetails(){

    alert('Your Details\n\nusername: ${userDetailsDatabase.username}\nphoneNumber: ${userDetailsDatabase.phoneNumber}\nemail: ${userDetailsDatabase.email}')


};


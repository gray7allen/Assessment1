// const readline = require('readline');

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let greeting = "Welcome to the password validator."
// console.log(greeting)

// reader.question("Enter password for validation please: ", function(input){
// 	const password = input.split('');
//     let passwordLength = input.length

//     //const isUpperCase = (string) => /^[A-Z]*$/.test(string)      -----Couldn't get this to work

//     // function isUpper(str) {
//     //     return !/[a-z]/.test(str) && /[A-Z]/.test(str);
//     // }

// if (passwordLength < 10){
//     console.log("Password Needs to be at least 10 characters");
// // } else if (isUpper(input) === false){
// //     console.log("Password needs to have an uppercase")
// } else {
//     console.log("Success")
// }
// //it did not like the ASCII stuff so i left it out to not mess up anything
// 	reader.close()

// });




console.log("Welcome to the password validator tool")

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Type the password you want validated: \n", function(input){

    console.log('the input was ' + input)

    // if(input.length >= 10){
    //     console.log('Good Password')
    // } else {
    //     console.log('Bad password: your password needs to be at least 10 characters long')
    // }

    const errorArr = [];

    if (input.length < 10){
        errorArr.push('your password needs to be at least 10 characters long')
    }

    if (!/\d/.test(input)) {
        errorArr.push('your password needs a number')
    }

    if (errorArr.length === 0) {
        console.log('Good password!')
    } else {
        console.log('Bad password because:')
        for (let i =0; i < errorArr.length; i++) {
            console.log(errorArr[i])
        }
    }
    
    
    reader.close()
	
});
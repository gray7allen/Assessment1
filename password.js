const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let greeting = "Welcome to the password validator."
console.log(greeting)

reader.question("Enter password for validation please: ", function(input){
	const password = input.split('');
    let passwordLength = input.length

    //const isUpperCase = (string) => /^[A-Z]*$/.test(string)

    // function isUpper(str) {
    //     return !/[a-z]/.test(str) && /[A-Z]/.test(str);
    // }

if (passwordLength < 10){
    console.log("Password Needs to be at least 10 characters");
// } else if (isUpper(input) === false){
//     console.log("Password needs to have an uppercase")
} else {
    console.log("Success")
}
//it did not like the ASCII stuff so i left it out to not mess up anything
	reader.close()

});
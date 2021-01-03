  // Assignment Code
var generateBtn = document.querySelector("#generate");

//Generate Password

//Prompts and confirmations 
function passwordCriteria() {
  var passwordLenght = prompt("How many characters in your new password? Between 8 abd 128 characters.");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", passwordCriteria);

console.log(passwordLenght)
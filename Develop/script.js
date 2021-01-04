  // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", passwordCriteria);

//--------- Start -------------------

//-- Password Characters

var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", "<", ">"];

//-- Promtps and confirms 

function passwordCriteria() {
  var passwordLenght = prompt("How many characters do you want your new password to contain?");
    if(passwordLenght < 8){
      alert("Password lenght should be more than 8 characters");
      passwordCriteria();
    } else if (passwordLenght > 128){
      alert("Password lenght should be less than 128 chracters");
      passwordCriteria();
    }else{
      confirm("Do you want to include special characters?")
      confirm("Do you want to include upper case letters?")
      confirm("Do you want to include lower case letters?")
      confirm("Do you want to include numbers?")
    }

}

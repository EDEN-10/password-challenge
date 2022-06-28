// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // getting input
  var lenght = prompt ("how many characters 8 and 128"); 
  var lowercase = confirm ("lowercase?");
  var uppercase = confirm ("uppercase?"); 
  var special = confirm ("special characters?");
  var numbers = confirm ("number");
  // ask for numbers
  // ask for special

  // deciding which characters to include depending on the answer
  console.log(lenght)
  console.log(lowercase);
  console.log(uppercase);
  console.log(special);
  console.log(numbers);

while (lenght < 8 || lenght >128) {
  window.alert('you must enter passward lenght between 8 and 128') 
  var lenght = prompt ("how many characters 8 and 128")
  
}

while (lowercase === false && uppercase === false && special === false && numbers === false) {
  window.alert ("pick one catagory")
  var lowercase = confirm ("lowercase?");
  var uppercase = confirm ("uppercase?"); 
  var special = confirm ("special characters?");
  var numbers = confirm ("number");

}
  var letterBasket = "";

  if (lowercase == true) {
    letterBasket += "abcdefghijklmnopqrstuvwxyz"; 
  }

  if (uppercase == true) {
    letterBasket += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (special == true) {
    letterBasket += "/.,!_"
  }
  if (numbers == true) {
    letterBasket += "0123456789"
  }

  console.log(letterBasket)

  // generation of password using random

  var result = "";

  for (i = 0; i < lenght; i++) {
    var randomNum = Math.floor(Math.random() * letterBasket.length);
    var randomChar = letterBasket.charAt(randomNum)
  
    result += randomChar;
  }
// give validation by asking question 




  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

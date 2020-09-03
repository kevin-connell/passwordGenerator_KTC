// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//user input 

var passLength = 0;

// custom array that will only include character sets that the user specifies

var passPossible = [];

// available character sets

var lowerSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numberSet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialSet = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", "<", "=", ">", "?", "@", "[", "]", "_", "{", "}"];

// user choices to include each character set in their password

var isLower = false;
var isUpper = false;
var isNumber = false;
var isSpecial = false;

var userPassword = ""

// function to add an array to the user's custom array

function addSet(x , y) {
  if (x) {
    passPossible = passPossible.concat(y)
  }
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  // reseting the variables for a new password

  passPossible = [];
  userPassword = "";
  var isLower = false;
  var isUpper = false;
  var isNumber = false;
  var isSpecial = false;

  // ask the user how long they would like their password

  var passLength = prompt("How long would you like your password to be?");

  // check to see if their answer is a number and fits the length requirements. if not, alert them

  while (isNaN(passLength) || passLength < 8 || passLength > 128) {
    if (isNaN(passLength)) {
      alert(passLength + " is not a number!");
    } else {
      alert("The password must be at least 8 characters and no more than 128 characters. " + passLength + " does not meet the critiria");
    } 
    var passLength = prompt("How long would you like your password to be?");
  }

  // ask user to confirm which character sets they would like to include in their password. for every set approved, add that set to the user's custom characters array. if they deline all options, alert them and re-ask

  while (isLower == false && isUpper == false && isNumber == false && isSpecial == false) {

    isLower = confirm("Would you like to include lowercase letters?")
    addSet(isLower , lowerSet)

    isUpper = confirm("Would you like to include uppercase letters?")
    addSet(isUpper , upperSet)

    isNumber = confirm("Would you like to include numbers?")
    addSet(isNumber , numberSet)

    isSpecial = confirm("Would you like to include special characters?")
    addSet(isSpecial , specialSet)

    if (isLower == false && isUpper == false && isNumber == false && isSpecial == false) {
      alert("You must selective at least one character type!")
    }
  }

  // generate a random number and use it to choose a character from the user's custom character array. continue choosing characters until the password is the user-specified length.

  for (var i = 0; i < passLength; i++) {
    userPassword = userPassword + passPossible[Math.floor(Math.random() * passPossible.length)];
  }

  // return the result!

  return userPassword;
}
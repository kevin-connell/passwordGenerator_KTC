// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var passLength = 0;
var passPossible = [];

var lowerSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numberSet = ["1","2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialSet = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-",".", "/", ":", "<", "=", ">", "?", "@", "[", "]", "_", "{", "}"];

var isLower = false;
var isUpper = false;
var isNumber = false;
var isSpecial = false;

var randomNumber = 1
var userPassword = ""

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passPossible = [];
  userPassword = "";

  var passLength = prompt("How long would you like your password to be?");
  while (passLength < 8 || passLength > 128) {
    alert("The password must be at least 8 characters and no more than 128 characters. " + passLength + " does not meet the critiria");
    var passLength = prompt("How long would you like your password to be?");
  }
  isLower = confirm("Would you like to include lowercase letters?")
  if (isLower) {
    passPossible = passPossible.concat(lowerSet)
    console.log(passPossible)
  }
  isUpper = confirm("Would you like to include uppercase letters?")
  if (isUpper) {
    passPossible = passPossible.concat(upperSet)
    console.log(passPossible)
  }
  isNumber = confirm("Would you like to include numbers?")
  if (isNumber) {
    passPossible = passPossible.concat(numberSet)
    console.log(passPossible)
  }
  isSpecial = confirm("Would you like to include special characters?")
  if (isSpecial) {
    passPossible = passPossible.concat(specialSet)
    console.log(passPossible)
  }
  for (var i = 0; i < passLength; i++) {
    randomNumber = Math.floor(Math.random() * passPossible.length);
    console.log(randomNumber);
    userPassword = userPassword + passPossible[randomNumber];
    console.log("Password is " + userPassword);
  }
  return userPassword;
}
// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabetUpChars = "abcdefghijklmnopqrstuvwxyz".split("");
var alphabetLowChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numberChars = "1234567890".split("");
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
var charsToUse = [];
console.log(specialChars);

function getPassLen() {
    var passLen = prompt("How many characters should your new password be?");
    if (passLen < 8 || passLen > 128) {
        alert("Please choose inclusively between 8 and 128 characters");
        getPassLen()
    } else {
        return passLen;
    }
}

function generatePassword() {
    var genPass = "";
    var passLen = getPassLen();

    if (confirm("Would you like to use UPPERCASE letters?")) {
        charsToUse = charsToUse.concat(alphabetUpChars);
    }
    if (confirm("Would you like to use lowercase letters?")) {
        charsToUse = charsToUse.concat(alphabetLowChars);
    }
    if (confirm("Would you like to use numeric characters?")) {
        charsToUse = charsToUse.concat(numberChars);
    }
    if (confirm("Would you like to use special characters?")) {
        charsToUse = charsToUse.concat(specialChars);
    }

    if (charsToUse.length > 0) {
        for (var i = 0; i < passLen; i++) {
            genPass = genPass.concat(charsToUse[Math.floor(Math.random() * charsToUse.length)]);
            console.log(genPass);
        }
        charsToUse = [];
    
        return genPass;
    } else {
        alert("You must select at least one type of character.\nPlease try again.")
        generatePassword();
    }
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

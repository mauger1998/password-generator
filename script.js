const passwordOutput = document.querySelector("h3");
const characterInput = document.querySelectorAll("#numberOfCharacters");
const uppercaseCheckbox = document.getElementById("includeUppercase");
const numberCheckbox = document.getElementById("includeNumbers");
const symbolCheckbox = document.getElementById("includeSymbols");
const button = document.getElementById("button");
const form = document.getElementById("passwordGenerator");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
})

function generatePassword(numberOfCharacters, includeUppercase, includeNumbers, includeSymbols) {
    
}

function generateArray(high, low, arrayToPushTo) {
    for (let i = low; i <= high; i++) {
        arrayToPushTo.push(i);
        
    }
}

/*Arrays*/

let arrayOfUppercaseCodes = [

];

let arrayOfLowercaseCodes = [
    
];

let arrayOfSymbolCodes = [

];

let arrayOfNumberCodes = [

];

/* */

generateArray(90, 65, arrayOfUppercaseCodes);
generateArray(122, 97, arrayOfLowercaseCodes);
generateArray(47, 33, arrayOfSymbolCodes);
generateArray(57, 48, arrayOfNumberCodes);

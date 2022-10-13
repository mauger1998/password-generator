const passwordOutput = document.querySelector("h3");
const characterInput = document.querySelector("#numberOfCharacters");
const uppercaseCheckbox = document.getElementById("includeUppercase");
const numberCheckbox = document.getElementById("includeNumbers");
const symbolCheckbox = document.getElementById("includeSymbols");
const button = document.getElementById("button");
const form = document.getElementById("passwordGenerator");

const uppercaseCharCodes = generateArray(65, 90);
const lowercaseCharCodes = generateArray(97, 122);
const numberCharCodes = generateArray(48, 57);
const symbolCharCodes = generateArray(33, 47).concat(
    generateArray(58, 64)
).concat(
    generateArray(91, 96)
).concat(
    generateArray(123, 126)
)


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const numberOfCharacters = characterInput.value;
    const includeUppercase = uppercaseCheckbox.checked;
    const includeNumbers = numberCheckbox.checked;
    const includeSymbols = symbolCheckbox.checked;
    const password = generatePassword(numberOfCharcters, includeUppercase, includeNumbers, includeSymbols);


    
    
})

function generatePassword(numberOfCharacters, includeUppercase, includeNumbers, includeSymbols) {
    let pass = "";
    for (let i = 0; i < numberOfCharacters; i++) {
        pass += 
    }
}

function generateArray(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
        
    }
    return array;
}



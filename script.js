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




function generatePassword(numberOfCharacters, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = lowercaseCharCodes;
    if (includeUppercase) charCodes = charCodes.concat(uppercaseCharCodes);
    if (includeNumbers) charCodes = charCodes.concat(numberCharCodes);
    if (includeSymbols) charCodes = charCodes.concat(symbolCharCodes);

    let passwordToReturn = [];
    for (let i = 0; i < numberOfCharacters; i++) {
        let characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordToReturn.push(String.fromCharCode(characterCode));
        
    }
    return passwordToReturn.join("");
}

function generateArray(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
        
    }
    return array;
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const numberOfCharacters = characterInput.value;
    const includeUppercase = uppercaseCheckbox.checked;
    const includeNumbers = numberCheckbox.checked;
    const includeSymbols = symbolCheckbox.checked;
    const password = generatePassword(numberOfCharacters, includeUppercase, includeNumbers, includeSymbols);
    passwordOutput.textContent = password;

    
    
})


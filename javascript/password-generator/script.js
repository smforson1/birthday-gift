const upperCase = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const lowerCase = [..."abcdefghijklmnopqrstuvwxyz"];
const numbers   = [..."0123456789"];
const symbols   = [..."!@#$%^&*()_+-=[]{}|;:',.<>/?`~"];

const allChars = [...upperCase, ...lowerCase, ...numbers, ...symbols];

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let lengthInput = document.getElementById("password-length");
let includeSymbolsCheckbox = document.getElementById("include-symbols");



function generatePassword(length = 12, includeSymbols = true) {
    let chars = includeSymbols ? allChars : [...upperCase, ...lowerCase, ...numbers];
    let password = "";
    for (let i = 0; i < length; i++) {
        randIndex = Math.floor(Math.random() * chars.length);
        password += chars[randIndex];
    }
    return password;
}

function displayPasswords() {
    let length = parseInt(lengthInput.value);
    let includeSymbols = includeSymbolsCheckbox.checked;
    
    // Validate length
    if (length < 4) length = 4;
    if (length > 15) length = 15;
    
    password1.textContent = generatePassword(length, includeSymbols);
    password2.textContent = generatePassword(length, includeSymbols);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Password copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}

password1.addEventListener("click", function() {
    if (password1.textContent) {
        copyToClipboard(password1.textContent);
    }
});

password2.addEventListener("click", function() {
    if (password2.textContent) {
        copyToClipboard(password2.textContent);
    }
});



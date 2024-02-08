let characters = [];
let passwordEl = document.getElementById("password");
let Status = true;


for (let i = 33; i <= 126; i++) {
    characters.push(String.fromCharCode(i));
}
console.log(characters[randomNumber()]);

function randomNumber() {
    return Math.floor(Math.random() * 94)
}


function randomPassword() {
    if (Status === true) {
        for (let i = 0; i <= 11; i++) {
            passwordEl.textContent += characters[randomNumber()]
        }
        Status = false
    }
    else {
        passwordEl.textContent = ""
        for (let i = 0; i <= 11; i++) {
            passwordEl.textContent += characters[randomNumber()]
        }
    }
}
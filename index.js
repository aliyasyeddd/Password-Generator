const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


const passwordBtn = document.getElementById("generate-password-btn");
const passwordOne = document.getElementById("password1");
const passwordTwo = document.getElementById("password2");



passwordBtn.addEventListener("click", function () {
    let randomPassword1 = "";
    let randomPassword2 = "";
    for (let i = 0; i < 15; i++) {
        let randomIndex1 = Math.floor(Math.random() * characters.length);
        let randomIndex2 = Math.floor(Math.random() * characters.length);
        randomPassword1 += characters[randomIndex1];
        randomPassword2 += characters[randomIndex2];
    }
    passwordOne.textContent = randomPassword1;
    passwordTwo.textContent = randomPassword2;
})
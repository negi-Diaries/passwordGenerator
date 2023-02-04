console.log('this is  the project for password generator');
// grabbing the input tag 
let inputEl = document.getElementById('password');

// grabbing the generate button 
let generateButton = document.getElementById('btn1');
// console.log(generateButton)

generateButton.addEventListener('click', ()=>{
    inputEl.value = passwordGenerator();
});

function passwordGenerator(){
    let characters = "1234567890abcdefghijklmnopqrstuvwsyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}:<>?/";
    // console.log(characters.length);
    // console.log(Math.random())
    // console.log(Math.floor(Math.random()*characters.length))
    let passwordLength = 12;
    let password = "";
    for(let i = 0; i<passwordLength; i++){
        let randomNumber = Math.floor(Math.random()*characters.length);
        password += characters.substring(randomNumber, randomNumber + 1)
    }
    return password;
}

// now to copy the generated password
let copyElement = document.getElementById('btn2');

copyElement.addEventListener('click', ()=>{
    let copyText = document.getElementById('password')
    // to select data 
    copyText.select()
    // to copy data 
    document.execCommand('copy');

})




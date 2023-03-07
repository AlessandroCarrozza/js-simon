
// collegamenti al DOM
const numbersDom = document.getElementById("numbers");
const secondsDom = document.getElementById("seconds");
const titleSecondsDom = document.getElementById("title-seconds");
const btnResultDom = document.getElementById("btn-result");
const mainTitleDom = document.getElementById("main-title");

let score = 0;
let randomNumbersList = [];
let userNumbers = [];
let valid = false;


showRandomNumbers(0, 5, randomNumbersList);
console.log(randomNumbersList);

btnResultDom.addEventListener("click" , function(){
    checkNumbers();
    titleSecondsDom.innerHTML = `Ti sei ricordato ${score} numeri su 5.`;
    mainTitleDom.innerHTML = "";
})






// function per mostrare i numeri casuali a schermo
function showRandomNumbers (min, max, yourList) {
    for (let i = min; i < max; i++) {
    
        const randomNumber = (generateUniqueRandomNumber(randomNumbersList, 1, 100));
        yourList.push(randomNumber);
    
    }  
    numbersDom.innerHTML = yourList;

    countDown(15);

}


function checkNumbers () {

    if (!valid) {
        for (let i = 0; i < randomNumbersList.length; i++) {
        
            if (randomNumbersList.includes(userNumbers[i])) {
                score++;
            }
        }
        valid = true;
    }

}






function countDown (secondsNumber) {
    let seconds = secondsNumber;
    secondsDom.innerHTML = seconds;
    seconds--;
    const clock = setInterval( function() {

        if (seconds == 0) {
            clearInterval(clock);
            titleSecondsDom.innerHTML = "Tempo scaduto";
            numbersDom.innerHTML = "";
             setTimeout(function(){
                 userChosenNumbers(5);
                 btnResultDom.classList.remove("d-none");
            }, 100);

        } else {
            secondsDom.innerHTML = seconds;
            seconds--;
        }
        
    }, 1000);
}


function userChosenNumbers (number) {
    let chosenNumber = 0;
    for (let i = 0; i < number; i++) {
        
        chosenNumber = parseInt(prompt("Inserisci un numero"));
        userNumbers.push(chosenNumber);
    }
    console.log(userNumbers);
}




// functions per la generazione di 5 numeri unici casuali
function generateUniqueRandomNumber(blacklist, min, max) {

    let isValidNumber = false;
    let randomNumber;

    while (!isValidNumber) {
        randomNumber = generateRandomNumber(min, max);
        if (!blacklist.includes(randomNumber)) {
            isValidNumber = true;
        }
    }
    return randomNumber;
}

function generateRandomNumber(min, max) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
}
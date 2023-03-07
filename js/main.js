
// collegamenti al DOM
const numbersDom = document.getElementById("numbers");
const secondsDom = document.getElementById("seconds");
const titleSecondsDom = document.getElementById("title-seconds");

let randomNumbersList = [];
let userNumbers = [];

showRandomNumbers(0, 5, randomNumbersList);
console.log(randomNumbersList);





// function per mostrare i numeri casuali a schermo
function showRandomNumbers (min, max, yourList) {
    for (let i = min; i < max; i++) {
    
        const randomNumber = (generateUniqueRandomNumber(randomNumbersList, 1, 100));
        yourList.push(randomNumber);
    
    }  
    numbersDom.innerHTML = yourList;

    countDown(3);
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
            setTimeout(userChosenNumbers (), 100);
        } else {
            secondsDom.innerHTML = seconds;
            seconds--;
        }
        
    }, 1000);
}


function userChosenNumbers () {
    let chosenNumber = 0;
    for (let i = 0; i < 5; i++) {
        
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
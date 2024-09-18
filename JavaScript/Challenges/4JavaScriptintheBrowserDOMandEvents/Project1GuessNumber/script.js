// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and 
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input 
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
'use strict'

const guess = document.querySelector(".guess")
const body = document.querySelector('body')
const number = document.querySelector('.number')
const score = document.querySelector('.score')
const check = document.querySelector('.check')
const message = document.querySelector('.message')
let secretNumber = Math.floor(Math.random() * 20)+1;
const again = document.querySelector('.again')
const highScore = document.querySelector('.highscore')
console.log(secretNumber);


let scoreValue = 20;
let highScoreValue = 0;
check.addEventListener('click', function(){
    console.log(guess.value);
    if(scoreValue >1){

        if (guess.value == secretNumber) {
            body.style.backgroundColor = '#60b347';
            number.textContent = guess.value ;
            message.textContent = 'Correct Number!'
            if(scoreValue>highScoreValue){
                highScoreValue = scoreValue
                highScore.textContent = highScoreValue
            }
        }else if (guess.value > secretNumber){
            message.textContent = 'Try again! To high!'
            scoreValue--;
            score.textContent = scoreValue
        }else{
            message.textContent = 'Try again! To low!'
            scoreValue--;
            score.textContent = scoreValue
        }
    }else{
         message.textContent = 'You loose!'
         score.textContent = 0
    }
} )

again.addEventListener('click' , function(){
    scoreValue = 20;
    secretNumber = Math.floor(Math.random() * 20) +1
    console.log(secretNumber);
    number.textContent = '?'
    message.textContent = 'Start guessing...'
    body.style.backgroundColor = '#222'
    guess.value = ''
    score.textContent = scoreValue;
})
    




// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and 
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input 
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnClose = document.querySelector('.close-modal')
const btnOpen = document.querySelectorAll('.show-modal')

for (let i = 0; i < btnOpen.length; i++){
    btnOpen[i].addEventListener('click', function(){
        modal.classList.remove('hidden')    
        overlay.classList.remove('hidden')
    })
}

btnClose.addEventListener('click' ,function(){
    modal.classList.add('hiden')
    overlay.classList.add('hidden')
})
    

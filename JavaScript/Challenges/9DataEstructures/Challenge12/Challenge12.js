/*Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no 
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL*/

import gameEvents from "./DataChachenge.js";
//1
const events = new Set(gameEvents.values())
console.log(events);
//2

gameEvents.delete(64)

console.log(gameEvents);

//3 easy result

const time = [...gameEvents.keys()].pop()
console.log( ` An event happend, on average, every ${time/gameEvents.size} minutes`);
//3 hard result
let sum = []
let result = 0  
let arr = [...gameEvents.keys()]

// console.log('arreglo '+arr);

// console.log(gameEvents.keys());
for (let i = 0; i < arr.length; i+=2) {
    if( i + 1 < arr.length){
        // console.log(Math.abs(arr[i] - arr[i + 1]));
        const average = Math.abs((arr[i] - arr[i + 1])/2);
        // console.log( 'average ' + average);
        sum.push(average)
    }else{
        sum.push(arr[i])
    }    
}
for (const i of sum) {
    result += i / sum.length
}
// console.log(result);
console.log(`Average of ${arr.length} events games is: ${result}`);
// console.log('Suma: '+sum);


//4
const all = gameEvents.entries()
console.log(all);
for (const [key,value] of all) {
    if(key <= 45){
        console.log(`[FIRST HALF ] ${key}:  ${value}`);
    }else{
        console.log(`[SECOND HALF] ${key}:  ${value}`);    
    }
}

// if (item === 0 ) {
//     sum+= arr[i]
//     item++
//     console.log(` value first if: ${sum}`)
// }else if(item === 2){
//     item = 0
//     console.log(` value else if: ${sum}`);
// }
// const result = cont / gameEvents.size
// console.log(result);

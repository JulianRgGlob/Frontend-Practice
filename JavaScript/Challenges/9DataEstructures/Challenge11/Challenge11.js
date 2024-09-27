/*Let's continue with our football betting app! Keep using the 'game' variable from 
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}*/
import game from "./DataChallenge.js";

//1
const entries = game.scored.entries()

for (const [key,name] of entries) {
    console.log(`Goal ${key+1}: ${name}`);
}

//2

const {odds:value} = game
let average = 0
let div = Object.values(value).length
for (const item of Object.values(value)) {
    average += item
}
average /= div
// console.log(average);
console.log(`The average in ${div} teams is ${average}`)

//3
for (const [team,odds] of Object.entries(game.odds)) {
    const teamName = team === 'x' ? 'draw' : `victory ${game[team]}`
    console.log(`Odd of ${teamName}: ${odds}`)
}

//4
const scorers = {}
const {scored} = game
for (const player of scored) {
    scorers[player] ? scorers[player]++ : scorers[player] =1     
}
console.log(scorers);







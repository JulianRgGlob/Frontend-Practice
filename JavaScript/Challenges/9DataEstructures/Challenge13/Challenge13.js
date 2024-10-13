/*Write a program that receives a list of variable names written in underscore_case 
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to 
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable 
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase   ✅
firstName        ✅✅
someVariable     ✅✅✅
calculateAge     ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable 
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case 
you're stuck. Then pause and continue!
Afterwards, test with your own test data*/

const textA = document.createElement('textarea');
document.body.append(textA)
const btn = document.createElement('button');
btn.innerHTML = 'Click Me'
document.body.append(btn)

const save = btn.addEventListener('click', function(){
        // console.log(text.select());
    //  textA.value = 'lo que venga del arreglo'   
    const value = textA.value.split('\n')
    console.log(value);
    // let result = []
    for (const [j,i] of value.entries()) {
        // console.log(j);
        // const under = i.toLowerCase().trim().split('_')
        const [first,second] = i.toLowerCase().trim().split('_')
        // console.log(under); 
        const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`
        // const upper = (under[1][0].toUpperCase() + under[1].slice(1))
        // result = under[0].concat(upper) 
        const emoji = '✅'
        // .repeat(i + 1)}
        console.log(`${output.padEnd(20)}${emoji.repeat(j+1)}`);
        // under = upper.push(i.replace(i[0],i[0].toUpperCase))
    }        
})

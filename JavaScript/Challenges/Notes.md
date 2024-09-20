# Notes Js
## Part 1 
- Convert string a number use **Number(var)**
- Convert number a string use **String(var)**
- The Conditional (Ternary) Operator if **?** if yes **:** else
## Part 2
- Function declaration
    - Normal
- Function expression
    ```
    const nameVar = function(param){    }
    ```
- Arrow function
    ```
    const nameVar = param =>{    }
    const nameVar = (param1,param2) =>{    }
    ```
- Functions callings other functions
    ```
    const varFunction1 = nameFunction1(param);
    ```
- Arrays
    - declarate new array 
    ```
    const name = [value1,value2]
    const name = new Array(value1,value2)
    ```
    - basic operations
    ```
    .push()
    .unshift() //add in first position
    .pop() // remove last element
    .shift() //remove first element 
    .indexOf() // position of an element
    .includes() // if include element true else false
    ```
- Object Methods
    ```
    const jonas = {
        firstname : "Jonas",
        birthYear: 1991,
        ...

        calAge: function(){
            return this.birthYear...
        }
    }

    console.log(jonas.calAge())
    ```
## Section 8: How JavaScript Works Behind the Scenes
- ***High-level***(Devs does not have to worry, everityng happens automatically), Object-Oriented, ***Multi-paradigm*** (OOP,Procedural(Using so far),Functional etc), ***Garbage-Collecter***(automatic admin the storage), ***First-class functions***(treated as variables),
- JIT(Just-in-time compilation) 
- Execution context
    - Compilation ➡️ Creation of GEC(***Global execution context***) ➡️ Execution of ***top-level code***(inside global EC)➡️ execution ***functions*** and waiting for ***callbacks***


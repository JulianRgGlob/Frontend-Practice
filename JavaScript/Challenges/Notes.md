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
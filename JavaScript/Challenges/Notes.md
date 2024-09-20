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
- Call Stack
    - How to execute the code
- Variable Enverionment, Scope chain , this keyword
    - Scope Chain
        - Scoping(Where do variables live?)
        - Scope 
            - Global
                ```
                    const name = 'Julian'
                ```
            - Function
                ```
                function calAge(birthYear){
                    const now = 2024
                    const age = now - birthYear
                    return age
                }

                console.log(now )// Reference Error
                ```
            - Block only en ***let*** and ***const*** ES6
                ```
                if(year > 1980){
                    const millenial = true
                }
                console.log(millenial) // Reference Error
                ```
    - VariableEnverionment
        - Hosting and The TDZ(Temporal Dead Zone) 
            - Hosting 

                Function Declarations = FD

                var Variables = var

                let and const variables = let/const

                function expressions and arrows = ➡️
                |         | Hoisted? | Initial value | Scope |
                |---------|----------|---------------|----------|
                |FD       | ✅       |Actual Function| Block   |
                |Var      | ✅       |undefined     | Function |
                |let/const| ❌       |unitilalized TDZ| Block  |
                |➡️       || Depend if using car or let const|
            - TDZ varaibles declarated wit ***let*** and ***const***

                ```
                console.log(x); // ReferenceError: Cannot access 'x' before initialization
                let x = 10;
                console.log(x);
                ```
    - this keyword Referentes to the object
        - this is **Not** static 
            - Method 👉 this = < Object that is calling the method > 
                ```
                    const person = {
                    name: 'John',
                    age: 30,
                    greet: function() {
                        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
                        }
                    };
                ```
            - Simple function call 👉 this = undefined
            - Arrow functions  👉 this = < this of surround in function (lexical this)>
            - Event listener 👉 this = < Dom element that the handelr is attached to> 
- Regular functions vs Arrows Functions
    - Arguments
        ```
        function add() {
            let total = 0;
            for (let i = 0; i < arguments.length; i++) {
                total += arguments[i];
            }
            return total;
        }

        const addArrow = (...numeros) => {
            let total = 0;
            for (let i = 0; i < numeros.length; i++) {
                total += numeros[i];
            }
            return total;
        };
        ```
- Primitive vs Reference Types
    - Primitives (stored in the call stack)
      - Number, String, Boolean , Undefined , Null ,Symbol , BigInt
    - Reference Types (stored in the HEAP() )
      - Objects (Object literal , Arrays , Functions , Many more)


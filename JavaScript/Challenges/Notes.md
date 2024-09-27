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

## Section 9: Data Structures, Modern Operators and Strings
- In arrays, values are accessed based on their position (index).

  In objects, values are accessed based on the property names.
- Destructing Arrays (break a complex data strucutre)
    ```
    const numbers = [1, 2, 3, 4, 5];

    // Array destructuring
    const [a, b, c] = numbers;

    // Destructuring while skipping the second element
    const [first, , third] = numbers;

    // Destructuring with the rest operator
    const [fruit1, fruit2, ...otherFruits] = fruits;

    //Destructuring in Functions
    function displayData([name, age]) {
    console.log(`Name: ${name}, Age: ${age}`);
    }

    const data = ['John', 30];
    displayData(data); // Output: Name: John, Age: 30

    //Destructuring with Default Values
    const numbers2 = [1];

    const [x, y = 10] = numbers2;
    ```
- Destructing Objects 
    ```
    const person = {
    name: 'John',
    age: 30,
    city: 'Madrid'
    };

    // Object destructuring
    const { name, age, city } = person;

    // Destructuring with different variable names
    const { name: nameMake, age: ageModel } = person;

    // Destructuring with default values
    const { title, author, publicationYear = 1967 } = book;
    
    // Nested destructuring
    const user = {
        name: 'Laura',
        info: {
            age: 28,
            address: {
                city: 'Barcelona',
                country: 'Spain'
            }
        }
    };
    const { name, info: { age, address: { city, country } } } = user;

    //Function destructuring
    function displayDetails({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
    }

    const person2 = {
        name: 'Carlos',
        age: 25,
        city: 'Valencia'
    };
    ```
- Spread Operator **(...)**
    - ```
        const arr = [7,8,9]
        const newArr = [1,2, ...arr] ➡️ save values of the array
      ```
- Rest Pattern and Parameters
    - Rest Pattern is the opposite to the spread operator

    Collect multiples elements and condense them into an array and i usted LEFT to the ' = '
    ```
    const arr = [a,b, ...others] = [1,2,3,4,5] ➡️ save values into an array
    ```
- Nullish Coalescing Operator ***??***
    - returns the left-hand operand if it is not null or undefined; otherwise, it returns the right-hand operand.
    ```
    const a = null;
    const b = 5;
    const c = a ?? b;

    console.log(c); // Output: 5
    ```
- For-of loop
    ```
    arr

    for (const item of arr){item}
    ```
    - .entries() ➡️ returns an array of a given object's own enumerable string-keyed property key-value pairs

- Optional Chaining (***?***)
    - If a property does not exist or is null/undefined, the expression short-circuits and evaluates to undefined instead of throwing an error
    ```
    console.log(arr.item.sun?.moon)
    ```  
- Object Keys, Values, Entries
    - Object Keys
    ```
    Object.keys
    ```
    - Object Values
    ```
    Object.values()
    ```
    - Object Entries mix Keys and Values
    ```
    Object.entries()
    for(const [key, {value1,value2}] if entries){}
    ```
- sets //unique, dont repear elements
    ```
    const name = new Set([])
    ```
    - .size , .has() ➡️ includes element in array , .add() , .delete() , clear()

- maps //keys and values but we can have any type of key
    ```
    const name = new Map([])
    ```
    - .set('**key**','**value**') , .get(**key**)
    - convert objects to maps
    ```
    const name = new Map(Object.entries(nameObject))
    ```
    - convert maps to array
    ```
    ...map
    ```
- Strings
    - indexOF('string') , lastIndexOf('string)
    - slice(beginParameter,endParameter) // we can use negative parameter, and begin in the end
    - 
    
      
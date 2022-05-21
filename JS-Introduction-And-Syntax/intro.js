let firstName = 'Pesho';
let age = 23;
console.log(firstName + ' - ' + age);

firstName = 'Gucci';
console.log(firstName + ' - ' + age);

//  function declaration

function printCount(count){
    console.log("*".repeat(count));
}

printCount(10);

// function expression

let countDown = function(number = 10){ 
    for(let i = number; i > 0; i--){
        console.log(i);
    }
}

countDown();

// Arrow function

let countUp = (max) => {
    for(let i = 0; i < max; i++){
        console.log(i);
    }
}

countUp(10);

let sum = (a,b) => a + b;
let result = sum(1,3);

console.log(result);

// *******************************************
firstName = 'Lubak';
console.log(firstName.toUpperCase()); 


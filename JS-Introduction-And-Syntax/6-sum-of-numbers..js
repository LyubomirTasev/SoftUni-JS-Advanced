function solve(startN, endN){
    let num1 = Number(startN);
    let num2 = Number(endN);
    let sum = 0;
    for(let i = num1; i <= num2; i++){
        sum += i;
    }
    return sum;
}

// console.log(solve('1', '5'));
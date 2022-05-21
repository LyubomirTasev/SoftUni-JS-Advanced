function solve(input){
    let firstElement = input.shift();
    let lastElement = input.pop();

    let sum = Number(firstElement) + Number(lastElement);
    return sum;
}

console.log(solve(['20', '30', '40']));
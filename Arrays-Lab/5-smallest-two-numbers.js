function solve(array) {
    let result = [];
    
    result = array.sort((a, b) => a - b);
    result = result.slice(0, 2);

    console.log(result.join(' '));
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);
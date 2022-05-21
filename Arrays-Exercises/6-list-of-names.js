function solve(array){
    let sorted = array.sort((a, b) => a.localeCompare(b));

    let orderedNumber = 1;

    sorted.forEach((name) => {
        console.log(`${orderedNumber}.${name}`);
        orderedNumber++;
    });

}

solve(["John", "Bob", "Christina", "Emma"])
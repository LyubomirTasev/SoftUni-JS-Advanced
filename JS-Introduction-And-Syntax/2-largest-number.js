function solve(first, second, third){
    let result;

    if(first > second && first > third){
        result = first;
    } else if(second > first && second > third){
        result = second;
    } else{
        result = third;
    }

    console.log(`The largest number is ${result}.`);
}
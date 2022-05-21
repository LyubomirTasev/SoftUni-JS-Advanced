function solve(input){
    let output = [];

    for(let i = 0; i < input.length; i++){
        let currentCommand = input[i];
        if(currentCommand === 'add'){
            output.push(i + 1);
        } else if(currentCommand === 'remove') {
            output.pop();
        }
    }
    if(output.length === 0){
        console.log('Empty');
    } else {
        console.log(output.join('\n'));
    }
    
}

solve(['remove', 'remove', 'remove'])
function solve(size){
    if(size === undefined){
        size = 5;
    }

    let line = "";

    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            line += '* ';
        }

        console.log(line);
        line = "";
    }
}

solve(7);

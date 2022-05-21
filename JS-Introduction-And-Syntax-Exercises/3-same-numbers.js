function solve(input) {
    let num = input.toString(); 
    let flag = true;
    let sum = 0;
    let digitToCompare = num[0];

    for (let i = 0; i < num.length; i++) {
        
        sum += Number(num[i]); 

        if (num[i] !== digitToCompare) {
            flag = false;
        }
    }
    console.log(flag);
    console.log(sum);
}

solve(2222222)

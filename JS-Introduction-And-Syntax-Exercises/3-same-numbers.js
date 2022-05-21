function solve(input) {
    let num = input.toString(); // парсваме инпута в стринг, за да го обходим в цикъл
    let flag = true;
    let sum = 0;
    let digitToCompare = num[0];

    for (let i = 0; i < num.length; i++) {
        
        sum += Number(num[i]); // парсваме стринга към число, за да го добавим към сумата OR +num[i]

        if (num[i] !== digitToCompare) {
            flag = false;
        }
    }
    console.log(flag);
    console.log(sum);
}

solve(2222222)

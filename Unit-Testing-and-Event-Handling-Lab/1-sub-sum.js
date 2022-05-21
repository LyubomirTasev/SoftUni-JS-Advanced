function solve(numbers, start, end) {
    if (!Array.isArray(numbers)) {
        return NaN;
    }

    let startIndex = Math.max(start, 0); // взимаме максималната стойност измежду start и 0
    let endIndex = Math.min(end, numbers.length - 1); // взимаме минималната стойност измежду end и последния елемент от масива
                          //
                         // 
                        //  
               // if(start < 0) {
               //     start = 0;
               // }
               // if(end > numbers.length - 1){
               //     end = numbers.length - 1;
               // }

    let subNumbers = numbers.slice(startIndex, endIndex + 1);

    let sum = subNumbers.reduce((a, x) => a + Number(x), 0);

    return sum;
}

module.exports = solve;
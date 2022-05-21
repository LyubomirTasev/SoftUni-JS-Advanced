function add(num) {
    let sum = num;

    function inner(number){
        sum += number;

        return inner;
    }

    inner.toString = ()=>{
        return sum;
    }

    return inner(num);
}

console.log(add(4)(3)(3).toString());
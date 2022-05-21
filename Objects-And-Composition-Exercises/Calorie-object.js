function object(input){
    let obj = {};
    let inputL = input.length;

    for(let index = 0; index < inputL; index += 2){
        let productName = input[index];
        let calories = Number(input[index + 1]);
        obj[productName] = calories;
    }

    console.log(obj);
}

object(['Yoghurt','48', 'Rise','138','Apple','52'])
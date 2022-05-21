function solve(fruit, weightInGrams, pricePerKg){
    let weightinKg = weightInGrams / 1000;
    let moneyNeeded = weightinKg * pricePerKg;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightinKg.toFixed(2)} kilograms ${fruit}.`);
}

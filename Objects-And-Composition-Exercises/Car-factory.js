function solve(objectCar) {
    let resultCar = {};
    let engine = {};
    let carriage = {};

    resultCar.model = objectCar.model;

    if (objectCar.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (objectCar.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else {
        engine.power = 200;
        engine.volume = 3500;
    }

    carriage.type = objectCar.carriage;
    carriage.color = objectCar.color;

    if(objectCar.wheelsize % 2 === 0){
        objectCar.wheelsize--;
    }

    resultCar.engine = engine;
    resultCar.carriage = carriage;
    resultCar.wheels = [objectCar.wheelsize, objectCar.wheelsize, objectCar.wheelsize, objectCar.wheelsize];

    return resultCar;
}
solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});

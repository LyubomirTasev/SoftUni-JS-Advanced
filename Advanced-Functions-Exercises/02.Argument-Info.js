function argumentInfo(){
    let data = {}; 

    Array.from(arguments).forEach((line) => {
        let type = typeof line;
        console.log(`${type}: ${line}`);

        if (!data[type]) {
            data[type] = 0;
        }

        data[type]++;
    });

    Object.keys(data)
    .sort((a,b) => data[b] - data[a])
    // .sort((a,b) => {
    //     return data[b] - data[a];
    // })
    .forEach((key) => console.log(`${key} = ${data[key]}`));
}


function solve(...input){
    let arguments = input;
    let typesCounter = {};
    
    arguments.forEach(element => {
        let type = typeof(element);
        console.log(`${type}: ${element}`);
       if(!typesCounter.hasOwnProperty(type)){
            typesCounter[type] = 0;
       }
       typesCounter[type]++;
    });
    
    for (const [prop, value] of Object.entries(typesCounter).sort((a,b) => b[1] - a[1])){
        console.log(`${prop} = ${value}`);
    }
    }
    
    solve({ name: 'bob'}, 3.333, 9.999);

function solve(input){
    let result = [];
    for (const element of input) {
        let command = element.split()[0];
        let string = element.split()[1];

        if(command === 'add'){
            add(string);
        } else if(command === 'remove'){
            remove(string);
        } else {
            print();
        }
    }

    function add(element){
        result.push(element);
    }
    function remove(element){
        result = result.filter(e => e != element);
    }
    function print(){
        console.log(result.join(','));
    }
}

solve(["add hello", "add again", "remove hello", "add again", "print"]);




// function solve(input) {
//     let innerArr = [];
//    let obj = {
//       add(string) {
//         innerArr.push(string);
//       },
//       remove(string) {
//         innerArr = innerArr.filter((x) => x !== string);
//       },
//       print() {
//         console.log(innerArr.join(","));
//       },
//     };

//     for (const item of input) {
//         let [operation, value] = item.split(" ");
//         obj[operation](value);
//      }
// }

// solve(["add hello", "add again", "remove hello", "add again", "print"]);
function getFibonator() {
    let [a,b] = [0,1];
    
    return ()=> {
      let c = a + b;
      a = b;
      b = c;
      return a;
    }

    // let fiboNumbers = [0, 1];

    // function getFibo(){
    //   let result = fiboNumbers[fiboNumbers.length - 1];
    //   let current = fiboNumbers[fiboNumbers.length - 1] + fiboNumbers[fiboNumbers.length - 2];
    //   fiboNumbers.push(current);
    //   return result;
    // }
    // return getFibo;
   
  }
  let fib = getFibonator();
  console.log(fib()); 
  console.log(fib()); 
  console.log(fib()); 
  console.log(fib()); 
  console.log(fib()); 
  console.log(fib()); 
  console.log(fib()); 
function solve(n, k) {

    const arr = [1];
    for (let i = 1; i < n; i++) {
        let tempArr = arr.slice(-k)
        let sum = 0;

        for(let num of tempArr){
            sum += num;
        }
        arr.push(sum);
    }

    return(arr);
}
console.log(solve(6,3))
console.log(solve(8,2))
function solve(weekDay){
    let num;
    switch(weekDay){
        case 'Monday': num = 1; break;
        case 'Tuesday': num = 2; break;
        case 'Wednesday': num = 3; break;
        case 'Thursday': num = 4; break;
        case 'Friday': num = 5; break;
        case 'Saturday': num = 6; break;
        case 'Sunday': num = 4; break;
        default: num = 'error'; break;
    }
    console.log(num);
}


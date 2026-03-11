function number(num) {
    console.log(num);
    if (num > 0) {
        number(num-1);
    }
} 
number(5);
function fizzBuzz(i) {
    var num = i;

    if (num%3 === 0) {
        if (num%5 === 0) {
            console.log("fizzbuzz");
        } else {
            console.log("fizz");
        }
    }
    else if (i%5 === 0) {
        console.log("buzz");
    } else {
        console.log("Not multiple of 3 nor 5");
    }
    
};

fizzBuzz(process.argv[2]);
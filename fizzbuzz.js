let number = parseInt(prompt("Enter a number you ould like to FizzBuzz: ",));
const fizzBuzz = () => {
    for (let i = 0; i <= number; i++) {
        if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzBuzz");
        } else {
            console.log(i);
        }
    }
    
}

fizzBuzz();